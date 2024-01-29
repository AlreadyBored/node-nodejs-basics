import { Worker } from 'node:worker_threads'
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: Math.round(Math.random() * 10) })
};

await performCalculations();