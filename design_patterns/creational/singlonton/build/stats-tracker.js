"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsTracker = void 0;
// stats tracker 
var StatsTracker = /** @class */ (function () {
    function StatsTracker() {
        this.buttonClicks = 0;
        this.facebookShares = 0;
        this.twitterShares = 0;
        this.widgetViews = 0;
        // check if instance exists - raise error 
        if (StatsTracker._instance) {
            throw new Error("cannot");
        }
        // set up this 
        StatsTracker._instance = this;
    }
    Object.defineProperty(StatsTracker, "instance", {
        // get method
        get: function () {
            return StatsTracker._instance;
        },
        enumerable: false,
        configurable: true
    });
    // init private _instance 
    StatsTracker._instance = new StatsTracker();
    return StatsTracker;
}());
exports.StatsTracker = StatsTracker;
