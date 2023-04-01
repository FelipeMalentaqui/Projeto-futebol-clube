import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const matches = await matchesService.getAll();

  return res.status(200).json(matches);
};

const userController = { getAll };

export default userController;
