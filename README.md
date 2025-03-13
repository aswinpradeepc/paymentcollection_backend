# Payment Collection Backend

## Overview

The Payment Collection Backend is a Node.js-based API that facilitates EMI payment tracking and customer management. Built with TypeScript, Express, and PostgreSQL, this backend provides endpoints for handling customer records, processing payments, and managing transactions. The application is containerized using Docker and follows a CI/CD pipeline for automated deployment.

## Features

- Customer management (CRUD operations)
- EMI payment processing
- PostgreSQL database integration via Sequelize ORM
- API documentation using Swagger
- Authentication via environment variables
- CI/CD pipeline using GitHub Actions
- Dockerized deployment

## Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL, Sequelize ORM
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **API Documentation:** Swagger

## Directory Structure

```
aswinpradeepc-paymentcollection_backend/
├── README.md
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── .env.example
├── .sequelizerc
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── config.js
│   │   └── db.ts
│   ├── controllers/
│   │   ├── customerController.ts
│   │   └── paymentController.ts
│   ├── middlewares/
│   │   └── errorHandler.ts
│   ├── migrations/
│   │   ├── create-customers.js
│   │   └── create-payments.js
│   ├── models/
│   │   ├── customer.ts
│   │   ├── index.ts
│   │   └── payment.ts
│   ├── routes/
│   │   ├── customerRoutes.ts
│   │   └── paymentRoutes.ts
│   └── swagger/
│       └── swaggerConfig.ts
└── .github/workflows/
    └── deploy.yml
```

## Installation

### Prerequisites

- Node.js (>= 16)
- PostgreSQL
- Docker & Docker Compose (for containerized deployment)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/aswinpradeepc/paymentcollection_backend.git
   cd paymentcollection_backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Fill in the `.env` file with your database credentials.
4. Run database migrations:
   ```sh
   npx sequelize-cli db:migrate
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Access API documentation at:
   ```
   http://localhost:3000/api-docs
   ```

## Running with Docker

To run the application using Docker, execute:

```sh
docker compose up --build -d
```

## API Endpoints

### Customer Routes

- `GET /customers` → Fetch all customers

### Payment Routes

- `POST /payments` → Process an EMI payment
- `GET /payments/:account_number` → Retrieve payment history for a customer

## Deployment

The application uses GitHub Actions for deployment. Every push to the `main` branch triggers an automated deployment.
