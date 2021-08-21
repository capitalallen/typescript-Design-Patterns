import { injectable } from "inversify";
import { IDepB } from "./idepb";

@injectable()
export class ConcreteB implements IDepB {
    doB(){
        console.log("Doing B")
    }
}