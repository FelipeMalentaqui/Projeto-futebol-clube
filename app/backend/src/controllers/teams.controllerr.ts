import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

const getAll = async (req: Request, res: Response) => {
  const teams = await teamsService.getAll();

  return res.status(200).json(teams);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teamsId = await teamsService.getById(id);

  return res.status(200).json(teamsId);
};

const userController = { getAll, getById };

export default userController;
