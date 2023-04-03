// import IGames from '../interface/IGames';
import MatchesModel from '../database/models/Matches';

const msg = 'It is not possible to create a match with two equal teams';
const msg2 = 'There is no team with such id!';

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

// const verifyTeam = async (paran: string) => {
//   const team1 = await MatchesModel.findByPk(paran);

//   if (!team1) return { type: 'TIME_NOT', message: msg2 };
// };

const createGame = async (
  homeTeamId: string,
  awayTeamId: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) => {
  if (homeTeamId === awayTeamId) return { type: 'teamsError', message: msg };

  // verifyTeam(homeTeamId);
  const team1 = await MatchesModel.findOne({ where: { homeTeamId } });
  const team2 = await MatchesModel.findOne({ where: { awayTeamId } });

  if (!team1 || !team2) return { type: 'teamNot', message: msg2 };

  const newGame = await MatchesModel.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return { type: null, message: newGame };
};

const userService = { getAll, gameInProgress, finish, updatedGame, createGame };

export default userService;
