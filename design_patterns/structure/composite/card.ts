import { ICardComponent } from "./icard-component";

export class Card implements ICardComponent{
    constructor(public name: string, public attack: number, public defense: number){
        
    }
    add(component: ICardComponent): void {
        throw new Error("Operation not supproted");
    }
    remove(component: ICardComponent): void {
        throw new Error("Operation not supproted");
    }
    get(index: number): ICardComponent {
        throw new Error("Operation not supproted");
    }
    display(): string {
        return `${this.name}: ${this.attack} / ${this.defense}`;
    }
    
}