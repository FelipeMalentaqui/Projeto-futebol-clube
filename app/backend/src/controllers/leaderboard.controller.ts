import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

const getAll = async (req: Request, res: Response) => {
  // const performanceHome = await leaderboardService.getAll();
  const performanceHome = await leaderboardService.test();

  return res.status(200).json(performanceHome);
};

const useController = { getAll };

export default useController;
