import MatchesModel from '../database/models/Matches';

const getAll = async () => {
  const matches = await MatchesModel.findAll({
    include: ['homeTeam', 'awayTeam'],
  });

  return matches;
};

const gameInProgress = async (inProgress: boolean) => {
  if (inProgress) {
    const games = await MatchesModel.findAll({
      where: { inProgress },
      include: ['homeTeam', 'awayTeam'],
    });
    return games;
  }
};

const userService = { getAll, gameInProgress };

export default userService;
