import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const calc = (workerData) => new Promise(
        (resolve) => {
            const worker = new Worker('./src/wt/worker.js', {
                workerData
            });
            worker.on('message', (value) => resolve({ status: 'resolved', value }));
            worker.on('error', (v) => resolve({ status: 'rejected', v }));
        })
    const arr = [];
    for (let i = 0; i < cpus().length; i++) {
        arr.push(calc(i + 10));
    }
    const result = await Promise.all(arr);
    console.log(result)
};

await performCalculations();

/*
* You should implement several functions in dedicated files

worker.js - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
data - value from worker in case of success or null in case of error in worker
The results in the array must be in the same order that the workers were created
*
*
*
* */
