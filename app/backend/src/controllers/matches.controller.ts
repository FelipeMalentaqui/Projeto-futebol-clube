import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const matches = await matchesService.getAll(inProgress as string);

  return res.status(200).json(matches);
};

const finish = async (req: Request, res: Response) => {
  const { id } = req.params;

  await matchesService.finish(id);

  return res.status(200).json({ message: 'Finished' });
};

// const gameInProgress = async (req: Request, res: Response) => {

// };

const userController = { getAll, finish };

export default userController;
