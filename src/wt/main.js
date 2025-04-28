import { cpus } from 'os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Worker, isMainThread } from 'node:worker_threads';

const performCalculations = async () => {
    if(isMainThread) {
        const results = [];
        const __filename = fileURLToPath(import.meta.url),
            __dirname = dirname(__filename);
        const cpuCount = cpus().length;
        const pathToWorkerFile = './worker.js';

        const threadReadyPromises = Array.from({length: cpuCount}, (_, i) => {
            return new Promise((resolve) => {
                const thread = new Worker(join(__dirname, pathToWorkerFile));
                const valueForThread = 10 + i;

                thread.postMessage(valueForThread);
                thread.on('message', (resultValue) => {
                    results[i] = resultValue;
                    resolve();
                });
                thread.on('error', (calculationError) => {
                    results[i] = {status: 'error', data: null};
                    resolve();
                });
            });
        });

        await Promise.all(threadReadyPromises);
        console.log(results)
    } else {
        throw new Error('Calculation failed');
    }
};

await performCalculations();