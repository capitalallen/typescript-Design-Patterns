"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var stats_tracker_1 = require("./stats-tracker");
function test() {
    var t = stats_tracker_1.StatsTracker.instance;
    console.log(t.widgetViews);
    console.log(t.facebookShares);
}
exports.test = test;
