/* eslint-disable max-lines-per-function */
import {
  totalGoals, goalsOpponent, diferenceGoals,
  victory, draw, defeat, totalPoints, utilizationTeam,
} from '../utils/tableCalcule';
import MatchesModel from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { IMatches } from '../interface/IMatches';
// import { IMatchtesTeam } from '../interface/IMatchesTeam';

const getAll = async () => {
  const teams = await Teams.findAll();
  const matches = await MatchesModel.findAll();

  const matchsTeam = teams
    .map((team) => matches
      .filter((match) => team.id === match.dataValues.homeTeamId));

  const array = matchsTeam.map((e, index) => {
    const obj = {
      name: teams[index].teamName,
      totalPoints: totalPoints(e as unknown as IMatches[]),
      totalGames: e.length,
      totalVictories: victory(e as unknown as IMatches[]),
      totalDraws: draw(e as unknown as IMatches[]),
      totalLosses: defeat(e as unknown as IMatches[]),
      goalsFavor: e.reduce(totalGoals, 0),
      goalsOwn: e.reduce(goalsOpponent, 0),
      goalsBalance: diferenceGoals(e.reduce(totalGoals, 0), e.reduce(goalsOpponent, 0)),
      efficiency: utilizationTeam(e as unknown as IMatches[], e as unknown as IMatches[]),
    };
    // console.log(obj);
    return obj;
  });

  return array;
};

const useService = { getAll };

export default useService;
