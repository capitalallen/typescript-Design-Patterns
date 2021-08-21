import { IDepA } from "./idepa";
import { IDepC } from "./idepc";
import { IDepB } from "./idepb";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";

@injectable()
export class ConcreteC implements IDepC {
    constructor(
        @inject(TYPES.IDepA)
        private _depA: IDepA, 
        @inject(TYPES.IDepB)
        private _depB: IDepB){

    }

    doC(){
        this._depA.doA();
        this._depB.doB();
        console.log("Doing C");
    }
}