import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const matches = await matchesService.getAll();

  return res.status(200).json(matches);
};

const gameInProgress = async (req: Request, res, Response) => {
  const { inProgress } = req.query;
  const games = await matchesService.gameInProgress(inProgress);

  return res.status(200).json(games);
};

const userController = { getAll, gameInProgress };

export default userController;
