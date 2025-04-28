import os from 'node:os';
import { Worker } from 'worker_threads';

// main.js - implement function that creates number of worker threads
// (equal to the number of host machine logical CPU cores) from file worker.js
//  and able to send data to those threads and to receive result of the
//  computation from them. You should send incremental number starting
//  from 10 to each worker. For example: on host machine with 4 cores you
//  should create 4 workers and send 10 to first worker, 11 to second worker,
//  12 to third worker, 13 to fourth worker. After all workers will finish,
//  function should log array of results into console. The results are array
//  of objects with 2 properties:
//      - status - 'resolved' in case of successfully received value from worker
//          or 'error' in case of error in worker
//      - data - value from worker in case of success or null in case of error
//          in worker

const performCalculations = async () => {
    // Write your code here
    const coresNumber = os.availableParallelism();
    const workers = [];

    for (let i = 0; i < coresNumber; i++) {
        const worker = new Worker('./worker.js', {
            workerData: { number: i + 10 },
        });

        const workerPromise = new Promise((resolve) => {
            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        });
        workers.push(workerPromise);
    }
    const resultArray = await Promise.all(workers);
    console.log(resultArray);
};

await performCalculations();
