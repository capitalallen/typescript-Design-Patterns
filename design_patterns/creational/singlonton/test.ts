import { StatsTracker } from "./stats-tracker";



export function test(){
    let t = StatsTracker.instance;
    console.log(t.widgetViews);
    console.log(t.facebookShares);
}
