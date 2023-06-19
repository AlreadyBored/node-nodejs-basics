import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerScriptPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerScriptPath, { workerData: { n: 10 } });

        worker.on('message', (result) => {
            console.log(`Result: ${result}`);
            resolve(result);
        });

        worker.on('error', (err) => {
            console.error(err);
            reject(err);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
};

await performCalculations();