import MatchesModel from '../database/models/Matches';

const getAll = async () => {
  const matches = await MatchesModel.findAll({
    include: ['homeTeam', 'awayTeam'],
  });

  return matches;
};

const userService = { getAll };

export default userService;
