import { CommandWorker } from "./command-worker";
import { LogCommand, LogCommandParams } from "./log-command";

const sleep = async(duration: number): Promise<any>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,duration);
    });
}

const testCommandPattern = async(): Promise<any>=>{
    let commandWork = new CommandWorker(5000);

    while (true){
        try{
            sleep(1000);
            let b: any = 10;
            b();
        } catch(err){
            let params: LogCommandParams = {
                title: "Oops, something went wrong",
                body: "Please try again later",
                err: err,
                filename: './error.log',
            };
            commandWork.registerCommand(new LogCommand(params));
        }
    }
}
testCommandPattern();