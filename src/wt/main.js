import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workerPath = path.join(dirname, 'worker.js');
    const results = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(workerPath, { workerData: 10 + i });

        worker.on('message', (result) => {
            results[i] = { status: 'resolved', data: result };
            if (results.length === numCores) {
                console.log(results);
            }
        });

        worker.on('error', () => {
            results[i] = { status: 'error', data: null };
            if (results.length === numCores) {
                console.log(results);
            }
        });
    }
};

await performCalculations();
