export interface Payload {
    weight: number;
}

export interface Stage {
    engines: Engine[];
}

export class Engine{
    type: string = "";
}

export interface Rocket{
    payload: Payload;
}