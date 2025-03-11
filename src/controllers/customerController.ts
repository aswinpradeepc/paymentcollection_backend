import { Request, Response } from 'express';
import Customer from '../models/customer';

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};