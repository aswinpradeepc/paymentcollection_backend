import { Request, Response } from 'express';
import Payment from '../models/payment';

export const createPayment = async (req: Request, res: Response): Promise<void> => {
  const { account_number, payment_amount } = req.body;

  try {
    const payment = await Payment.create({
      account_number,
      payment_amount,
      status: 'completed',
    });

    res.status(201).json(payment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

export const getPaymentHistory = async (req: Request, res: Response): Promise<void> => {
  const { account_number } = req.params;

  try {
    const payments = await Payment.findAll({
      where: { account_number },
      order: [['payment_date', 'DESC']],
    });

    if (payments.length === 0) {
      res.status(404).json({ message: 'No payments found for this account' });
      return;
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error('Error retrieving payment history:', error);
    res.status(500).json({ error: 'Failed to retrieve payment history' });
  }
};