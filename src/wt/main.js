import {Worker, isMainThread, parentPort} from 'worker_threads';
import os from "os";

const performCalculations = async () => {
    const cpuNumb = os.cpus().length;
    console.log("Количество ядер:" + cpuNumb)
    const arr = [];
    for(let i=0; i<=cpuNumb; i++){
        const worker = new Worker('./src/wt/worker.js');
        worker.postMessage(10+i);
        arr.push = worker.on('message', (data) => {
            const obj ={};
            obj['status'] = (data)? 'resolved': 'err';
            obj['data'] = data;
            console.log(obj)
        })
    }


};

await performCalculations();