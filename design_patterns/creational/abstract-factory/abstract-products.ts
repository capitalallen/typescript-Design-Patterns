export interface Payload {
    weight: number;
}

export interface Stage {
    engines: Engine[];
}

export interface Engine{
    type: string;
}

export interface Rocket{
    payload: Payload;
    stages: Stage[];
}