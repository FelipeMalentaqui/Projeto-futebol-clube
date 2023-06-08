import sequelize from 'sequelize';
import {
  totalGoals, goalsOpponent, diferenceGoals,
  victory, draw, defeat, totalPoints, utilizationTeam,
} from '../utils/tableCalcule';
import MatchesModel from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { IMatches } from '../interface/IMatches';
import { ILeaderboard } from '../interface/ILeaderboard';
// import { IMatchtesTeam } from '../interface/IMatchesTeam';

const arraySorte = (a: ILeaderboard, b: ILeaderboard): number => {
  if (b.totalPoints - a.totalPoints !== 0) return b.totalPoints - a.totalPoints;
  // if (a.totalPoints < b.totalPoints) return -1;
  // if (a.totalPoints === b.totalPoints) return 0;

  if (b.totalVictories - a.totalVictories !== 0) return b.totalVictories - a.totalVictories;
  // if (a.totalVictories > b.totalVictories) return 1;
  // if (a.totalVictories < b.totalVictories) return -1;
  // if (a.totalVictories === b.totalVictories) return 0;

  if (b.goalsBalance - a.goalsBalance !== 0) return b.goalsBalance - a.goalsBalance;
  // if (a.goalsBalance > b.goalsBalance) return 1;
  // if (a.goalsBalance < b.goalsBalance) return -1;
  // if (a.goalsBalance === b.goalsBalance) return 0;

  if (b.goalsFavor - a.goalsFavor !== 0) return b.goalsFavor - a.goalsFavor;
  // if (a.goalsFavor > b.goalsFavor) return 1;
  // if (a.goalsFavor < b.goalsFavor) return -1;
  // if (a.goalsFavor === b.goalsFavor) return 0;
  // if (b.goalsOwn - a.goalsOwn !== 0) return a.goalsOwn - b.goalsOwn;
  return 0;
};

const getAll = async () => {
  // const matchsTeam = help();
  const teams = await Teams.findAll();
  const matches = await MatchesModel.findAll({ where: { inProgress: false } });
  const matchsTeam = teams.map((team) => matches
    .filter((match) => team.id === match.dataValues.homeTeamId));
  const array = matchsTeam.map((e, index) => {
    const obj = { name: teams[index].teamName,
      totalPoints: totalPoints(e as unknown as IMatches[]),
      totalGames: e.length,
      totalVictories: victory(e as unknown as IMatches[]),
      totalDraws: draw(e as unknown as IMatches[]),
      totalLosses: defeat(e as unknown as IMatches[]),
      goalsFavor: e.reduce(totalGoals, 0),
      goalsOwn: e.reduce(goalsOpponent, 0),
      goalsBalance: diferenceGoals(e.reduce(totalGoals, 0), e.reduce(goalsOpponent, 0)),
      efficiency: utilizationTeam(e as unknown as IMatches[], e as unknown as IMatches[]) };
    return obj;
  });
  // console.log(array);
  return array.sort(arraySorte);
};

const test = async () => {
  const matches = await sequelize.query(`
    SELECT * FROM matches as m WHERE m.homeTeamGoals > m.awayTeamGoals
  `);
  // const matches = await MatchesModel.findAll({
  //   where: {
  //     homeTeamGoals: {
  //       [Op.lt]: { model: Teams, as: 'timeVisitante' },
  //     },
  //   },
  //   include: [
  //     { model: Teams, as: 'homeTeam' },
  //     { model: Teams, as: 'timeVisitante' },
  //   ],
  // });
  return matches;
};

const useService = { getAll, test };

export default useService;
