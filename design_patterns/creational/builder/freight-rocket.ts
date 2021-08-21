import {LiquidRocketStage,LiquidRocketEngine} from './liquid-engin-products'; 
class FreightRocketFirstStage extends LiquidRocketStage {
    constructor(thrust: number) {
      super();
      let enginesNumber = 4;
      let singleEngineThrust = thrust / enginesNumber;
      for (let i = 0; i < enginesNumber; i++) {
        let engine = new LiquidRocketEngine(singleEngineThrust);
        this.engines.push(engine);
      }
    }
  }
  class FreightRocketSecondStage extends LiquidRocketStage {
    constructor(thrust: number) {
      super();
      this.engines.push(new LiquidRocketEngine(thrust));
    }
  }
  type FreightRocketStages =
[FreightRocketFirstStage, FreightRocketSecondStage];

class FreightRocket implements Rocket { payload: Satellite;
    stages = [] as FreightRocketStages;
    }