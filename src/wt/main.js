import {Worker} from "worker_threads"
import {cpus}  from "os";
import path from "path";

const performCalculations = async () => {
    const coresCount = cpus().length;
    const startNumber = 10;
    const workerPath = path.join(import.meta.dirname, 'worker.js');

    let jobs = []

    for (let index = startNumber; index <= startNumber + coresCount; index++) {
        jobs.push(new Promise((resolve) => {
            const worker = new Worker(workerPath, {
                workerData: {
                    num: index
                }
            });

            worker.on('message', (msg) => {
                resolve({
                    status: 'resolved',
                    data: msg,
                });
                worker.terminate();
            });

            worker.on('error', (err) => {
                resolve({
                    status: 'error',
                    data: null,
                });
            });
        }));
    }

    Promise.all(jobs).then((values) => {
        console.log(values);
    });
};

await performCalculations();
