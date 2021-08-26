import { IErrorLoggingStrategy } from "./ierror-logging-strategy";
import fs from 'fs';

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy{
    log(err: Error): Promise<any> {
        return new Promise((resolve,reject)=>{
            fs.appendFile('./error.log',err.message,"utf-8",(error)=>{
                if (error){
                    console.error("Error logging failed");
                    reject(error);
                } else {
                    resolve(0);
                }
            })
        })
    }

}