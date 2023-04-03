import { Request, Response } from 'express';
import matchesService from '../services/matches.service';
import mapError from '../utils/errorMap';

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

const updatedGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;

  const updateGoals = await matchesService.updatedGame(id, homeTeamGoals, awayTeamGoals);

  return res.status(200).json(updateGoals);
};

const createGame = async (req: Request, res: Response) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
  // const { body } = req.body;

  const { type, message } = await matchesService.createGame(
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  );

  // if (type === 'teamsError') return res.status(422).json({ message });

  // if (type === 'teamNot') return res.status(404).json({ message });

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

const userController = { getAll, finish, updatedGame, createGame };

export default userController;
