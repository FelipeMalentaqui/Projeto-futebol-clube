import MatchesModel from '../database/models/Matches';

const gameInProgress = async (inProgress: string) => {
  console.log(inProgress, 'Progress');
  const result = inProgress === 'true';

  const games = await MatchesModel.findAll({
    where: { inProgress: result },
    include: ['homeTeam', 'awayTeam'],
  });
  return games;
};

const getAll = async (inProgress: string) => {
  if (inProgress) {
    return gameInProgress(inProgress as string);
  }

  // const result = inProgress === 'true';
  const matches = await MatchesModel.findAll({
    // where: { inProgress: result },
    include: ['homeTeam', 'awayTeam'],
  });

  return matches;
};

const userService = { getAll, gameInProgress };

export default userService;
