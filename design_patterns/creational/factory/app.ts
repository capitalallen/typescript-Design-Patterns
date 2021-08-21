import { GameCharacterFactory } from "./game-character-factory";

let warrior = GameCharacterFactory.getWarrior(10);
let mage = GameCharacterFactory.getMage(20);

console.log(warrior);
console.log(mage);