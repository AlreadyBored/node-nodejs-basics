import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    let promises = [];

    for (let i = 0; i < numCores; i++) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url));
            worker.postMessage(10 + i);
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        }));
    }

    try {
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Error in worker execution:', error);
    }
};

await performCalculations();