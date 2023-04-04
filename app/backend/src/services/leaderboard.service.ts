import { totalGames } from '../utils/tableCalcule';
// import MatchesModel from '../database/models/Matches';
import Teams from '../database/models/Teams';

const getAll = async () => {
  const teams = await Teams.findAll();
  console.log(teams);
  const arrayPromise = teams.map(async (e: Teams) => {
    const obj = {
      name: e.teamName,
      // totalPoints: totalPoints(e),
      totalGames: await totalGames(e.id),
      // totalVictories: victory(e.id),
      // totalDraws: 0,
      // totalLosses: 0,
      // goalsFavor: totalGoals(e.id),
      // goalsOwn: 0,
      // goalsBalance: 0,
      // efficiency: 0,
    };
    return obj;
  });
  const resolvePromise = await Promise.all(arrayPromise);

  return resolvePromise;
};

const useService = { getAll };

export default useService;
