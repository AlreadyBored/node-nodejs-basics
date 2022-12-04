import path from 'path';
import { fileURLToPath } from 'url';

import { Worker } from 'worker_threads';
import { cpus } from 'os'


const performCalculations = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/worker.js';

    let num = 10;
    const workers = await Promise.allSettled(cpus().map(() => (
        new Promise((resolve, reject) => {
            const worker = new Worker(filePath, { workerData: num++ });
            worker.on('message', msg => resolve(msg));
            worker.on('error', msg => reject(msg));
        })
    )));

    const results = workers.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
    }))

    console.log(results);
};

await performCalculations();