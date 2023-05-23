import {Worker} from 'node:worker_threads';
import {cpus} from 'os';
import path from "path";
import {fileURLToPath} from "url";

const INCREMENT_START = 10;
const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const results = await getWorkerCalculations(cpus().length, `${__dirname}/worker.js`);

    results.forEach(result => console.log(result));
};

async function getWorkerCalculations(cores, thread) {
    const results = [];

    for (let workerCounter = 0; workerCounter < cores; workerCounter++) {
        const queuedWorker = new Promise((resolve, reject) => {
            const worker = new Worker(
                thread,
                {
                    workerData: {
                        increment: INCREMENT_START + workerCounter
                    }
                }
            );

            worker.on('message', data => {
                resolve({
                    status: 'resolved',
                    data: data
                });
            });

            worker.on('error', data => {
                reject({
                    status: 'error',
                    data: null
                });
            });
        });

        try {
            results.push(await queuedWorker);
        } catch (error) {
            results.push({status: 'error', data: null});
        }
    }

    return results;
}

await performCalculations();