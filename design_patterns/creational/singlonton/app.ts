import {StatsTracker} from "./stats-tracker";
import { test } from "./test";

let t = StatsTracker.instance;

t.buttonClicks = 10;
t.facebookShares = 20;
t.twitterShares = 30;
t.widgetViews = 40;
console.log(t.buttonClicks)
console.log(t.facebookShares)
console.log(t.twitterShares)
console.log(t.widgetViews)
t.widgetViews++;
t.twitterShares+=2;

test();