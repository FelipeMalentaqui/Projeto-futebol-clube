import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.login(email, password);
  console.log(type, 'type');

  if (type) return res.status(401).json({ message });

  return res.status(200).json(message);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.body.user;
  const { type, message } = await loginService.getById(id);

  if (type) return res.status(400).json(message);

  return res.status(200).json(message);
};

const getAll = async (req: Request, res: Response) => {
  const users = await loginService.getAll();

  return res.status(200).json(users);
};

const userLogin = { login, getById, getAll };

export default userLogin;
