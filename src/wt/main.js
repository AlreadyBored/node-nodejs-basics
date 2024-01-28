import { cpus } from 'os';
import { Worker } from 'worker_threads';

import { getPath } from '../../utils/get.path.js';

const performCalculations = async () => {
    const numberStarting = 10;
    const workerFileName = getPath(import.meta.url, './worker.js');

    const getFibonacciNumber = (workerFileName, workerData) => new Promise((resolve, reject) => {
        const worker = new Worker(workerFileName, { workerData });

        worker.on('message', (data) => resolve({ status: resolve, data }));
        worker.on('error', reject);
    })

    const workersResult = await Promise
        .allSettled(cpus().map((item, index) => getFibonacciNumber(workerFileName, numberStarting + index)))
        .then(arr => arr.map((item) => item.status === 'fulfilled' ? { status: 'resolved', data: item.value.data } : { status: 'error', data: null }));
    console.log(workersResult)
};

await performCalculations();