import os from 'os';
import { Worker, isMainThread, workerData, parentPort, } from 'worker_threads';

const START_VALUE = 10;

const statusMap = {
    fulfilled: 'resolved',
    rejected: 'error',
}

export const performCalculations = async () => {
    // main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores)
    // from file worker.js and able to send data to those threads and to receive result of the computation from them.
    // You should send incremental number starting from 10 to each worker.
    // For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker.
    // After all workers will finish, function should return array of results. The results are an array of objects with 2 properties:
    // status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
    // data - value from worker in case of success or null in case of error in worker
    // The results in the array must be in the same order that the workers were created

    const logicalCPUcores = os.cpus();

    const workingPromises = logicalCPUcores.map((core, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(new URL('./worker', import.meta.url), { workerData: START_VALUE + i });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
              if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            })
        });
    });

    const results = await Promise.allSettled(workingPromises);

    return results.map(result => {
        const { status, value: { nthFibonacci = null } = {} } = result;

        return {
            status: statusMap[status],
            data: nthFibonacci,
        };
    })
};

performCalculations();
