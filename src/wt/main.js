import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    return await Promise.all(
        cpus().map((_, i) => new Promise((resolve) => {
            const worker = new Worker(join(__dirname, 'worker.js'));
            worker.postMessage(10 + i);
            worker.on('message', (msg) => resolve(msg));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        }))
    );
};

performCalculations().then(console.log);