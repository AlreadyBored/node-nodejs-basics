import { Worker } from 'node:worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cpuCores = cpus().length;
    const promisesArray = [];

    for (let i = 0; i < cpuCores; i++) {
        promisesArray.push(
            new Promise((resolve, reject) => {
                const newWorker = new Worker(workerPath, {
                    workerData: i + 10,
                });
                newWorker.on('message', resolve);
                newWorker.on('error', reject);
            })
        );
    }

    const results = await Promise.allSettled(promisesArray);
    const formattedResults = results.map((result) => {
        if (result.status === 'fulfilled') {
            return { status: 'resolved', data: result.value };
        } else {
            return { status: 'error', data: null };
        }
    });

    console.log(formattedResults);
};

await performCalculations();