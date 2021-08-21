"use strict";
// different characters 
// build specific classes of game characters 
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCharacterFactory = void 0;
var GameCharacterFactory = /** @class */ (function () {
    function GameCharacterFactory() {
    }
    GameCharacterFactory.getWarrior = function (level) {
        var warrior;
        if (level < 10) {
            warrior = {
                strength: 18,
                dexterity: 12,
                health: 20,
                magic: 0
            };
        }
        else {
            warrior = {
                strength: 20,
                dexterity: 20,
                health: 25,
                magic: 10
            };
        }
        return warrior;
    };
    GameCharacterFactory.getMage = function (level) {
        var mage;
        if (level < 10) {
            mage = {
                strength: 1,
                dexterity: 2,
                health: 3,
                magic: 4
            };
        }
        else {
            mage = {
                strength: 10,
                dexterity: 11,
                health: 12,
                magic: 13
            };
        }
        return mage;
    };
    return GameCharacterFactory;
}());
exports.GameCharacterFactory = GameCharacterFactory;
