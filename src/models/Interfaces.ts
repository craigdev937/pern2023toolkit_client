export interface IData {
    title: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface IPlayer extends IData {
    id: string
};

export interface IPlayerState {
    players: IPlayer[],
    loading: boolean,
    error: Error | null
};



