import { IMatches } from './IMatches';

export interface IMatchtesTeam {
  name: string;
  // totalPoints: number;
  totalGames: number
  totalVictories: IMatches;
  // totalDraws: number;
  // totalLosses: number
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  // efficiency: number | string;
}
