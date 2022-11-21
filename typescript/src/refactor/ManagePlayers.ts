import { IPlayer } from './IPlayer';

export interface ManagePlayers {
    createPlayer(name: string, points?: number): IPlayer;
    getName(player: IPlayer): string;
    getPoints(player: IPlayer): number;
    hasName(name: string, player: IPlayer): boolean;
    incrementPoints(player: IPlayer): IPlayer;
}