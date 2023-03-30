import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ message: 'All fields must be filled' });

  if (!password) return res.status(400).json({ message: 'All fields must be filled' });

  if (password.length < 6) return res.status(401).json({ message: 'Invalid email or password' });

  // const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const validaEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValid = validaEmail.test(email);
  console.log(emailValid);

  if (!emailValid) return res.status(401).json({ message: 'Invalid email or password' });

  next();
};

export default validateLogin;
