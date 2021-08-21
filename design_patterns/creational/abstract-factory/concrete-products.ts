import { RocketFactory } from './abstract-factory';
import {Engine, Rocket,Stage,Payload} from './abstract-products';

class ExperimentRocketStage implements Stage {
    engines: Engine[] = [];
}

class ExperimentRocketPayload implements Payload{
    weight: number = 0;
}
class ExperimentRocket implements Rocket{
    payload: ExperimentRocketPayload = new ExperimentRocketPayload;
    stages!: [ExperimentRocketStage];
}

export class ExperimentRocketFactory implements RocketFactory<ExperimentRocket>{
    createRocket(): ExperimentRocket{
        return new ExperimentRocket();
    }
    createPayload(): ExperimentRocketPayload{
        return new ExperimentRocketPayload();
    }
    createStages(): [ExperimentRocketStage]{
        return [new ExperimentRocketStage()];
    }
}

class Satellite implements Payload{
    constructor(public id: number, public weight: number){}
}

class FreightRocketFirstStage implements Stage{
    engines: Engine[] = [];
}

class FreightRocketSecondStage implements Stage {
    engines: Engine[] = [];
}

type FreightRocketStage = [FreightRocketFirstStage,FreightRocketSecondStage];

class FreightRocket implements Rocket {
    payload: Satellite = new Satellite(1,23);
    stages: FreightRocketStage = [new FreightRocketFirstStage(),new FreightRocketSecondStage()];
}

export class FreightRocketFactory implements RocketFactory<FreightRocket>{
    nextSatelliteId = 0;
    createRocket():FreightRocket{
        return new FreightRocket();
    }
    createPayload(): Satellite{
        return new Satellite(this.nextSatelliteId++,100);
    }
    createStages():FreightRocketStage{
        return [
            new FreightRocketFirstStage(),
            new FreightRocketSecondStage()
        ];
    }
}