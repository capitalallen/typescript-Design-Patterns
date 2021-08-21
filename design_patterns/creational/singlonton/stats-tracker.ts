// stats tracker 
export class StatsTracker {
    buttonClicks: number= 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetViews: number = 0;
    constructor(){
        // check if instance exists - raise error 
        if (StatsTracker._instance){
            throw new Error("cannot")
        }
        // set up this 
        StatsTracker._instance = this;
    }

    // init private _instance 
    private static _instance: StatsTracker = new StatsTracker();
    // get method

    public static get instance(): StatsTracker{
        return StatsTracker._instance;
    }
}