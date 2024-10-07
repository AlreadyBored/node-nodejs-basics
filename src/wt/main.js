import {
    Worker,

} from 'node:worker_threads';
import path from 'node:path';
import os from 'node:os'

const worker = (i) => new Promise((resolve, rejects) => {
    const pathWorker = path.resolve('src', 'wt', 'worker.js');
    const worker = new Worker(pathWorker, { workerData: i + 10 }).on('message', msg => {
        resolve(msg);
    });
}
);


const performCalculations = async () => {

    const arr = new Array();
    for (let i = 0; i < os.cpus().length; i++) {
        arr.push(worker(i));
    }

    Promise.all(arr).then((val) => {
        console.log(val);
    });



};

await performCalculations();