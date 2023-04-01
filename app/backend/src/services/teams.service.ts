import teamsModel from '../database/models/Teams';

const getAll = async () => {
  const teams = await teamsModel.findAll();

  return teams;
};

const getById = async (id: string) => {
  const teamsId = await teamsModel.findOne({
    where: { id },
  });

  return teamsId;
};

const userService = { getAll, getById };

export default userService;
