import { ICommand } from "./icommand";

export class CommandWorker{
    private _command: ICommand[] = [];
    private readonly _interval: number; 
    constructor(interval: number){
        this._interval = interval;
    }

    registerCommand(command: ICommand){
        console.log("regisering a command")
        if(!this._command.find(c=>c==command)){
            this._command.push(command)
        }
    }

    startworker(): any {
        setInterval(()=>{
            let command = this._command.pop();
            if (command){
                command.execute();
            }
        },this._interval);
    }
}