import { Worker } from 'worker_threads';
import os from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const cpuCores = os.cpus().length;

    // Создаем массив промисов для еври worker
    const workerPromises = Array.from({ length: cpuCores }, (_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker(join(__dirname, 'worker.js'), {
                workerData: 10 + i
            });

            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
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

    const workerResults = await Promise.all(workerPromises);
    console.log(workerResults);
};

await performCalculations();
