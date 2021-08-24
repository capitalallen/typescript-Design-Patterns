import { ICardComponent } from "./icard-component";

export class CardDeck implements ICardComponent{
    private _deck: ICardComponent[]=[];

    add(component: ICardComponent):void{
        if (component){
            this._deck.push(component);
        } else {
            throw new Error("Invalid componenet");
        }
    }

    remove(componenet: ICardComponent): void{
        if(!componenet){
            throw new Error("Invalid Component.");
        } else {
            this._deck = this._deck.filter(comp => comp!=componenet);
        }
    }
    get(index: number): ICardComponent{
        if (index<0 || index>=this._deck.length){
            throw new Error("Invalid index");
        }
        return this._deck[index];
    }
    display(): string {
        return this._deck.map(component => component.display()).join("\n");
    }
}