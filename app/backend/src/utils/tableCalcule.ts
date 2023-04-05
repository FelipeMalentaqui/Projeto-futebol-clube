import MatchesModel from '../database/models/Matches';
import { IMatches } from '../interface/IMatches';

// const victoryPoints = (element: IMatches[]) => {
//   let victoryTeam = 0;
//   element.forEach((team) => {
//     if (team.homeTeamGoals > team.awayTeamGoals) {
//       victoryTeam += 3;
//     }
//   });
//   return victoryTeam;
// };

// const drawPoints = (element: IMatches[]) => {
//   let drawTeam = 0;
//   element.forEach((team) => {
//     if (team.homeTeamGoals === team.awayTeamGoals) {
//       drawTeam += 3;
//     }
//   });
//   return drawTeam;
// };

// const defeatPoints = (element: IMatches[]) => {
//   let defeatTeam = 0;
//   element.forEach((team) => {
//     if (team.homeTeamGoals > team.awayTeamGoals) {
//       defeatTeam += 3;
//     }
//   });
//   return defeatTeam;
// };

export const totalPoints = (element: IMatches[]) => {
  let somaTotal = 0;
  element.forEach((team) => {
    if (team.homeTeamGoals > team.awayTeamGoals) {
      somaTotal += 3;
    }
    if (team.homeTeamGoals === team.awayTeamGoals) {
      somaTotal += 1;
    }
    if (team.homeTeamGoals < team.awayTeamGoals) {
      somaTotal += 0;
    }
  });

  // return { victoryTeam, drawTeam, defeatTeam };
  return somaTotal;
};

export const totalPoints2 = () => {
};

export const totalGames = (element: IMatches[]) => {
  let result = 0;
  result = element.length;
  return result;
};

export const victory = (element: IMatches[]) => {
  let victoryTeam = 0;
  element.forEach((team) => {
    if (team.homeTeamGoals > team.awayTeamGoals) {
      victoryTeam += 1;
    }
  });

  return victoryTeam;
};

export const draw = (element: IMatches[]) => {
  let drawTeam = 0;
  element.forEach((team) => {
    if (team.homeTeamGoals === team.awayTeamGoals) {
      drawTeam += 1;
    }
  });

  return drawTeam;
};

export const defeat = (element: IMatches[]) => {
  let defeatTeam = 0;
  element.forEach((team) => {
    if (team.homeTeamGoals < team.awayTeamGoals) {
      defeatTeam += 1;
    }
  });

  return defeatTeam;
};

export const totalGoals = (
  acc: number,
  curent: MatchesModel,
) => acc + curent.dataValues.homeTeamGoals;

export const goalsOpponent = (
  acc: number,
  curent: MatchesModel,
) => acc + curent.dataValues.awayTeamGoals;

export const diferenceGoals = (param1: number, param2: number) => {
  // const home = acc + curent.dataValues.homeTeamGoals;
  // const away = acc + curent.dataValues.awayTeamGoals;
  const total = param1 - param2;
  return total;
};

// porcentagem de jogos ganhos
export const utilizationTeam = (element: IMatches[], idTeam: IMatches[]) => {
  let result = 0;
  result = (totalPoints(element) / (totalGames(idTeam) * 3)) * 100;
  return result.toFixed(2);
};

// GP: Gols marcados a favor/ GC: Gols sofridos
