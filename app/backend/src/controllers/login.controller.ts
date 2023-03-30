import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.login(email, password);
  console.log(type, 'type');

  if (type) return res.status(401).json({ message });

  return res.status(200).json(message);
};

const userLogin = { login };

export default userLogin;
