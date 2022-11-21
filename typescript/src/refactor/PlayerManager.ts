import { ManagePlayers } from './ManagePlayers';
import { IPlayer } from './IPlayer';

const createPlayer = (name: string, points?: number): IPlayer => ({ name, points: points || 0 });

const getName = (player: IPlayer): string => player.name;

const getPoints = (player: IPlayer): number => player.points;

const hasName = (name: string, player: IPlayer): boolean => name === player.name;

const incrementPoints = (player: IPlayer): IPlayer => ({ ...player, points: player.points + 1 });

const PlayerManager: ManagePlayers = {
    createPlayer,
    getName,
    getPoints,
    hasName,
    incrementPoints
};

export { PlayerManager };