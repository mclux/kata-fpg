import { TennisGame } from './TennisGame';
import { ManagePlayers } from './ManagePlayers';
import { ICalculateScore } from './ICalculateScore';

export const createGameFactory = (playerManager: ManagePlayers, calculateScore: ICalculateScore) =>
    (playerOneName: string, playerTwoName: string): TennisGame => {
        let playerOne = playerManager.createPlayer(playerOneName);
        let playerTwo = playerManager.createPlayer(playerTwoName);

        const wonPoint = (playerName: string): void => {
            if (playerManager.hasName(playerName, playerOne)) {
                playerOne = playerManager.incrementPoints(playerOne);
            }
            if (playerManager.hasName(playerName, playerTwo)) {
                playerTwo = playerManager.incrementPoints(playerTwo);
            }
        };

        const getScore = (): string =>
            calculateScore(playerManager.getPoints(playerOne), playerManager.getPoints(playerTwo));

        return {
            wonPoint,
            getScore
        };
    };