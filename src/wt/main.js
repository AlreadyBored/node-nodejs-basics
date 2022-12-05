import { Worker } from "worker_threads";
import path from "path";
import os from "os";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
    let cpuNumber = os.cpus().length;
    let allPromises = [];

    for(let i = 0; i < cpuNumber; i++){
        allPromises.push(
            new Promise( (resolve, reject) => {
                const worker = new Worker(path.resolve(__dirname, "./worker.js"), {
                    workerData: +("1" + i),
                });
                
                worker.on("message", (msg) => {
                    resolve({ status: "resolved", data: msg });
                });
        
                worker.on("error", err => {
                    resolve({ status: "error", data: null });
                });
            })
        );
    }

    Promise.allSettled(allPromises).then( results => {
        results = results.map( obj => ({...obj.value}));
        console.log(results);
    });
};

await performCalculations();