import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ message: 'All fields must be filled' });

  if (!password) return res.status(400).json({ message: 'All fields must be filled' });

  if (password.length < 6) return res.status(400).json({ message: 'Password invalid' });

  // const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  // if (email !== validaEmail) return res.status(400).json({ message: 'Email invalid' });

  next();
};

export default validateLogin;
