import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const countCpus = cpus().length;

    const workerPromises = Array.from({ length: countCpus }, (_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker(join(__dirname, 'worker.js'), {
                workerData: 10 + i
            });

            worker.on('message', (message) => {
                resolve(message);
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        });
    });

    const allWorkersResults = await Promise.all(workerPromises);
    console.log(allWorkersResults);
};

await performCalculations();
