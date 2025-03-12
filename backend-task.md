### **Backend To-Do List: Payment Collection App**  
#### **Tech Stack:** Node.js, Express.js, PostgreSQL, Docker, Swagger  

---

## **1. Project Setup**  
- [ ] Initialize a **Node.js project** (`package.json`).  
- [ ] Install dependencies:  
  - `express`, `cors`, `dotenv` (API setup).  
  - `pg`, `sequelize` (PostgreSQL connection & ORM).  
  - `swagger-jsdoc`, `swagger-ui-express` (API documentation).  
  - `jest`, `supertest` (for testing).  
- [ ] Set up **`.env` file** for environment variables (DB credentials, API port, etc.).  

---

## **2. Dockerized Setup**  
- [ ] Create a **Dockerfile** for the backend.  
- [ ] Create a **`docker-compose.yml`** file to include:  
  - **Backend API container (Node.js + Express.js).**  
  - **PostgreSQL database container.**  
  - **Adminer** (optional, for managing PostgreSQL).  

---

## **3. Database Setup (PostgreSQL)**  
- [ ] Define **PostgreSQL database schema** using Sequelize migrations.  
- [ ] Create **tables**:  
  - `customers` → Store loan details.  
  - `payments` → Track EMI payments.  
- [ ] Establish a **PostgreSQL connection** in Node.js.  

---

## **4. API Development**  
#### **Customer Routes**  
- [ ] **GET `/customers`** → Fetch all customers’ loan details.  
- [ ] **GET `/customers/:account_number`** → Fetch details for a specific customer.  

#### **Payment Routes**  
- [ ] **POST `/payments`** → Process EMI payments (validate & save payment data).  
- [ ] **GET `/payments/:account_number`** → Retrieve payment history for a specific account.  

#### **Middleware & Error Handling**  
- [ ] Implement **input validation** (using `joi` or `express-validator`).  
- [ ] Add **error handling middleware** for structured API responses.  
- [ ] Enable **CORS** for frontend communication.  

---

## **5. API Documentation (Swagger)**  
- [ ] Set up **Swagger UI** for API docs.  
- [ ] Add Swagger annotations to API routes.  
- [ ] Access docs at `http://localhost:5000/api-docs`.  

---

## **6. Testing (Jest & Supertest)**  
- [ ] Write **unit tests** for controllers and services.  
- [ ] Write **integration tests** for API endpoints using **Supertest**.  
- [ ] Use **test database** with PostgreSQL for running tests.  

---

## **7. CI/CD & Deployment**  
- [ ] Push backend code to a **GitHub repository**.  
- [ ] Set up **GitHub Actions** for CI/CD pipeline.  
- [ ] Deploy backend to an **AWS EC2 instance** using Docker.  
- [ ] Configure **Nginx/PM2** to manage the backend server.  
- [ ] Ensure API works with the **React Native frontend**.  

---

## **8. Documentation**  
- [ ] Document API endpoints (Swagger/Postman collection).  
- [ ] Add setup instructions in `README.md`.  
- [ ] Explain database schema and **Docker deployment process**.  

---

---

### ** Database Schema Documentation**  

#### **1️⃣ Customers Table (Stores Loan Details)**  
| Column Name      | Data Type            | Constraints                     | Description |
|-----------------|---------------------|--------------------------------|-------------|
| `account_number` | `VARCHAR(20)`        | `PRIMARY KEY, UNIQUE, NOT NULL` | Unique customer account number |
| `name`          | `VARCHAR(255)`       | `NOT NULL`                     | Full name of the customer |
| `email`         | `VARCHAR(255)`       | `UNIQUE, NOT NULL`             | Customer's email for notifications |
| `phone`         | `VARCHAR(20)`        | `UNIQUE, NOT NULL`             | Customer's phone number |
| `address`       | `TEXT`               | `NOT NULL`                     | Customer's residential address |
| `issue_date`    | `DATE`               | `NOT NULL`                     | Date when the loan was issued |
| `interest_rate` | `DECIMAL(5,2)`       | `NOT NULL`                     | Interest rate applied to the loan |
| `tenure`        | `INTEGER`            | `NOT NULL`                     | Loan duration in months |
| `emi_due`       | `DECIMAL(10,2)`      | `NOT NULL`                     | Monthly EMI amount |

---

#### **2️⃣ Payments Table (Tracks EMI Payments)**  
| Column Name      | Data Type            | Constraints                          | Description |
|-----------------|---------------------|-------------------------------------|-------------|
| `id`            | `UUID`               | `PRIMARY KEY, DEFAULT UUIDV4()`    | Unique payment identifier |
| `account_number`| `VARCHAR(20)`        | `FK → customers.account_number, NOT NULL` | Links the payment to a customer |
| `payment_date`  | `TIMESTAMP`          | `DEFAULT NOW()`                    | Timestamp of when the payment was made |
| `payment_amount`| `DECIMAL(10,2)`      | `NOT NULL`                          | Amount paid for the EMI |
| `status`        | `ENUM('pending', 'completed', 'failed')` | `NOT NULL` | Status of the payment transaction |

---

### ** Relationships Between Tables**
✔ **One Customer → Multiple Payments** (`customers.account_number` → `payments.account_number`)  

### add dummy data. 

INSERT INTO customers (account_number, name, email, phone, address, issue_date, interest_rate, tenure, emi_due, "createdAt", "updatedAt")
VALUES 
(1000000001, 'Alice Johnson', 'alice@example.com', '9876543210', '123 Main St, City A', '2024-01-01', 5.50, 12, 10000.00, NOW(), NOW()),
(1000000002, 'Bob Smith', 'bob@example.com', '9876543211', '456 Elm St, City B', '2024-02-15', 6.00, 24, 15000.00, NOW(), NOW()),
(1000000003, 'Charlie Brown', 'charlie@example.com', '9876543212', '789 Oak St, City C', '2024-03-10', 4.75, 36, 20000.00, NOW(), NOW()),
(1000000004, 'David Williams', 'david@example.com', '9876543213', '101 Pine St, City D', '2024-04-20', 5.25, 18, 12000.00, NOW(), NOW()),
(1000000005, 'Eve Adams', 'eve@example.com', '9876543214', '202 Maple St, City E', '2024-05-05', 6.50, 30, 25000.00, NOW(), NOW()),
(1000000006, 'Frank Miller', 'frank@example.com', '9876543215', '303 Cedar St, City F', '2024-06-15', 5.75, 12, 8000.00, NOW(), NOW()),
(1000000007, 'Grace Lee', 'grace@example.com', '9876543216', '404 Birch St, City G', '2024-07-25', 5.00, 24, 18000.00, NOW(), NOW()),
(1000000008, 'Henry Clark', 'henry@example.com', '9876543217', '505 Walnut St, City H', '2024-08-30', 4.90, 36, 22000.00, NOW(), NOW()),
(1000000009, 'Ivy Taylor', 'ivy@example.com', '9876543218', '606 Cherry St, City I', '2024-09-10', 6.20, 18, 14000.00, NOW(), NOW()),
(1000000010, 'Jack White', 'jack@example.com', '9876543219', '707 Fir St, City J', '2024-10-01', 5.80, 30, 27000.00, NOW(), NOW()),
(1000000011, 'Kelly Green', 'kelly@example.com', '9876543220', '808 Spruce St, City K', '2024-11-11', 5.30, 12, 9000.00, NOW(), NOW()),
(1000000012, 'Leo Martin', 'leo@example.com', '9876543221', '909 Aspen St, City L', '2024-12-22', 6.00, 24, 16000.00, NOW(), NOW()),
(1000000013, 'Mia Thompson', 'mia@example.com', '9876543222', '1010 Beech St, City M', '2025-01-05', 4.95, 36, 21000.00, NOW(), NOW()),
(1000000014, 'Noah Scott', 'noah@example.com', '9876543223', '1111 Hemlock St, City N', '2025-02-14', 5.60, 18, 13000.00, NOW(), NOW()),
(1000000015, 'Olivia Evans', 'olivia@example.com', '9876543224', '1212 Magnolia St, City O', '2025-03-25', 5.40, 30, 28000.00, NOW(), NOW());
