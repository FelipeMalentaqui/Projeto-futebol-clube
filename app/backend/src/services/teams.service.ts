import teamsModel from '../database/models/Teams';

const getAll = async () => {
  const teams = await teamsModel.findAll();

  return teams;
};

// const getById = async (id) => {

// };

const userService = { getAll };

export default userService;
