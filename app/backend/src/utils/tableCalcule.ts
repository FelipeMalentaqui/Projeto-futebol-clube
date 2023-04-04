import MatchesModel from '../database/models/Matches';

// export const totalPoints = async (id) => {
//   // const result = await MatchesModel.findAll({
//   //   where: { homeTeamGoals: id },
//   // });
//   let points = 0;
//   if (homeTeamGoals > awayTeamGoals) return points += 3;
//   if (homeTeamGoals === awayTeamGoals) return points += 1;
//   if (homeTeamGoals < awayTeamGoals) return points += 0;

//   return points;
// };

export const totalGames = async (idTeam: number) => {
  const result = await MatchesModel.findAll({
    where: { homeTeamId: idTeam },
  });

  return result.length;
};

// export const totalGoals = async (id: number) => {
//   const result = await MatchesModel.findAll({
//     where: { homeTeamId: id },
//   });
//   const total = result.reduce((acc, ele) => acc + ele.homeTeamGoals, 0);
//   console.log(result);
// };

// export const victory = async (id: number) => {
//   let victoryTeam = 0;
//   const result = await MatchesModel.findAll({
//     where: { homeTeamId: id },
//   });
//   const home = result.reduce((acc, e) => {
//     return acc + e.homeTeamGoals;
//   }, 0);

//   const away = result.reduce((acc, e) => {
//     return acc.awayTeamGoals + e.awayTeamGoals;
//   });

//   if (home > away) return victoryTeam += 1;

//   return victoryTeam;
// };

// export const draw = async () => {
//   let draw = 0;
//   if (result.homeTeamGoals === result.awayTeamGoals) return draw += 1;

//   return draw;
// };

// export const defeat = async () => {
//   let defeat = 0;
//   if (result.homeTeamGoals < result.awayTeamGoals) return defeat += 1;

//   return defeat;
// };

// porcentagem de jogos ganhos
// export const utilizationTeam = (P: number, J: number) => [P / (J * 3)] * 100;

// GP: Gols marcados a favor/ GC: Gols sofridos
export const pointGoals = async (GP:number, GC:number) => GP - GC;
