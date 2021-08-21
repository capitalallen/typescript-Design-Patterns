"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_character_factory_1 = require("./game-character-factory");
var warrior = game_character_factory_1.GameCharacterFactory.getWarrior(10);
var mage = game_character_factory_1.GameCharacterFactory.getMage(20);
console.log(warrior);
console.log(mage);
