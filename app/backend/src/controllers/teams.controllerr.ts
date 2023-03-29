import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

const getAll = async (req: Request, res: Response) => {
  const teams = await teamsService.getAll();

  return res.status(200).json(teams);
};

// const getById = async (req: Request, res: Response) => {
//   const { id } = req.body;
//   const teams = await teamsService.getById(id);

//   return res.status(200).json(teams);
// };

const userController = { getAll };

export default userController;
