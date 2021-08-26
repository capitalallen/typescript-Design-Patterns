import { ICommand } from "./icommand";
import fs from 'fs';
export interface LogCommandParams{
    title: string;
    body: string;
    err: Error; 
    filename: string; 
}

export class LogCommand implements ICommand {
    private readonly _logCommandParams: LogCommandParams;
    constructor(logParams: LogCommandParams){
        this._logCommandParams = logParams;
    }
    execute(): Promise<any> {
        return new Promise<void>((resolve,reject)=>{
            const contents = `${this._logCommandParams.title}: ${this._logCommandParams.body} - ${this._logCommandParams.err.message}`;
            fs.appendFile(this._logCommandParams.filename,contents,"utf8",(err)=>{
                if (err){
                    console.log("loging failed");
                    reject(err)
                } else {
                    resolve();
                }
            })
        })
    }

}