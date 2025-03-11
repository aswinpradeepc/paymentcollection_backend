import { Router } from 'express';
import { getAllCustomers } from '../controllers/customerController';

const router = Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Retrieve a list of customers
 *     responses:
 *       200:
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   account_number:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   issue_date:
 *                     type: string
 *                     format: date-time
 *                   interest_rate:
 *                     type: number
 *                   tenure:
 *                     type: integer
 *                   emi_due:
 *                     type: number
 */
router.get('/', getAllCustomers);

export default router;