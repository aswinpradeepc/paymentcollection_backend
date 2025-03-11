import { Router } from 'express';
import { createPayment, getPaymentHistory } from '../controllers/paymentController';

const router = Router();

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               account_number:
 *                 type: string
 *               payment_amount:
 *                 type: number
 *             required:
 *               - account_number
 *               - payment_amount
 *     responses:
 *       201:
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 account_number:
 *                   type: string
 *                 payment_date:
 *                   type: string
 *                   format: date-time
 *                 payment_amount:
 *                   type: number
 *                 status:
 *                   type: string
 *       500:
 *         description: Failed to create payment
 */

/**
 * @swagger
 * /payments/{account_number}:
 *   get:
 *     summary: Retrieve payment history for a specific account
 *     parameters:
 *       - in: path
 *         name: account_number
 *         required: true
 *         schema:
 *           type: string
 *         description: The account number of the customer
 *     responses:
 *       200:
 *         description: A list of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   account_number:
 *                     type: string
 *                   payment_date:
 *                     type: string
 *                     format: date-time
 *                   payment_amount:
 *                     type: number
 *                   status:
 *                     type: string
 *       404:
 *         description: No payments found for this account
 *       500:
 *         description: Failed to retrieve payment history
 */
router.post('/', createPayment);
router.get('/:account_number', getPaymentHistory);

export default router;