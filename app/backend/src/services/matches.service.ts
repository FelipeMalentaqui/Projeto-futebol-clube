// import IGames from '../interface/IGames';
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

const finish = async (id: string) => {
  const game = await MatchesModel.update({
    inProgress: false,
  }, {
    where: { id },
  });

  return game;
};

const updatedGame = async (id: string, homeTeamGoals: string, awayTeamGoals: string) => {
  const updatedGoals = await MatchesModel.update({
    homeTeamGoals,
    awayTeamGoals,
  }, {
    where: { id },
  });

  return updatedGoals;
};

const createGame = async (
  homeTeamId: string,
  awayTeamId: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) => {
  const msg = 'It is not possible to create a match with two equal teams';
  const newGame = await MatchesModel.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  }, {
    // include: ['homeTeam', 'awayTeam'],
  });

  if (homeTeamId === awayTeamId) return { type: 'TEAMS_ERROR', message: msg };

  return { type: null, message: newGame };
};

const userService = { getAll, gameInProgress, finish, updatedGame, createGame };

export default userService;
