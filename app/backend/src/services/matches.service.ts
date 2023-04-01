import MatchesModel from '../database/models/Matches';

const getAll = async () => {
  const matches = await MatchesModel.findAll();

  return matches;
};

const userService = { getAll };

export default userService;
