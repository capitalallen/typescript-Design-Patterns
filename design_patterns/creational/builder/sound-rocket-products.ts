import {Payload,Engine,Rocket} from './abstract-products'
export class Probe implements Payload {
  weight: number = 0;
}

export class SolidRocketEngine implements Engine {
    type: string = "";
}

export class SoundingRocket implements Rocket {
  payload: Probe = new Probe;
  engine: SolidRocketEngine = new SolidRocketEngine;
}
