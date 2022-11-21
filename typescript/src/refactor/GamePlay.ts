import { createGameFactory } from './CreateGame';
import { PlayerManager } from './PlayerManager';
import { calculateScore } from './CalculateScore';

export const createGame = createGameFactory(PlayerManager, calculateScore);