// different characters 
// build specific classes of game characters 

import { GameCharacter } from "./game-character";

export class GameCharacterFactory{
    public static getWarrior(level:number): GameCharacter{
        let warrior: GameCharacter;
        if (level<10){
            warrior ={
                strength: 18,
                dexterity: 12,
                health: 20,
                magic: 0
            }
        } else {
            warrior={
                strength:20,
                dexterity:20,
                health:25,
                magic:10
            }
        }
        return warrior;
    }

    public static getMage(level:number): GameCharacter{
        let mage: GameCharacter;
        if (level<10){
            mage = {
                strength:1,
                dexterity:2,
                health:3,
                magic:4
            }
        } else {
            mage = {
                strength:10,
                dexterity:11,
                health:12,
                magic:13
            }
        }
        return mage;
    }
}