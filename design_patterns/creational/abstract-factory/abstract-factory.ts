import { Payload, Rocket,Stage } from "./abstract-products";

export interface RocketFactory<T extends Rocket> {
    createRocket(): T;
    createPayload(): Payload;
    createStages(): Stage[];
}