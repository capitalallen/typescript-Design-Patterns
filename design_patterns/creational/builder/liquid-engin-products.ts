import {Engine,Stage} from './abstract-products';
class LiquidRocketEngine extends Engine {
  fuelLevel = 0;
  refuel(level: number): void {
    this.fuelLevel = level;
  }
}

abstract class LiquidRocketStage implements Stage {
  engines: LiquidRocketEngine[] = [];
  refuel(level = 100): void {
    for (let engine of this.engines) {
      engine.refuel(level);
    }
  }
}
