import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || '';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.body.user = payload;

    next();
  } catch (err) {
    console.log(err, 'err tryCath');
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
