import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const matches = await matchesService.getAll(inProgress as string);

  return res.status(200).json(matches);
};

// const gameInProgress = async (req: Request, res: Response) => {

// };

const userController = { getAll };

export default userController;
