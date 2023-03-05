import { Request, Response, response } from 'express';
import { body, validationResult } from 'express-validator';

export const getTasks = async (req: Request, res: Response) => {
    try {
      const authors = ['task1', 'task2', 'uygulamayı bitir']
      return res.status(200).json(authors)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
};
