import { cpus } from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workerPath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const cpuCount = cpus().length;
    const nums = [];
    for (let i = 0; i < cpuCount; i++) {
        try {
            const num = await runWorker(10 + i);

            nums.push({
                status: 'resolved',
                data: num
            });
        } catch {
            nums.push({
                status: 'error',
                data: null
            });
        }
    }

    return nums;
};

const runWorker = workerData => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

const nums = await performCalculations();
console.log(nums);