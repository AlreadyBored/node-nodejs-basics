import {Worker} from 'node:worker_threads';

import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import * as os from "node:os";

const FILE_NAME = 'worker.js';

const performCalculations = async () => {
    const cpuAmount = Object.keys(os.cpus()).length;

    const workerPath = join(dirname(fileURLToPath(import.meta.url)), FILE_NAME);

    const workerPromises = [];

    for (let i = 0; i < cpuAmount; i++) {
        workerPromises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(workerPath,{workerData: {num: 10 + i}});

                worker.on('message', (data) =>  {
                    resolve({ status: 'resolved' , data });
                })

                worker.on('error', () =>  {
                    reject({ status: 'error' , data: null })
                })
            })
        )
    }

    const results = await Promise.allSettled(workerPromises);
    const data = results.map(result => result.value)

    console.log(data);
};

await performCalculations();
