import os from 'os';
import { Worker, isMainThread, workerData, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    return new Promise((resolve, reject) => {
        const numberOfWorkers = os.cpus().length;
        const results = [];

        const handleWorkerExit = (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        };

        const handleWorkerMessage = (result) => {
            results.push(result);

            if (results.length === numberOfWorkers) {
                resolve(results);
            }
        };

        if (isMainThread) {
            for (let i = 0; i < numberOfWorkers; i++) {
                const worker = new Worker(__filename, { workerData: 10 + i });
                worker.on('exit', handleWorkerExit);
                worker.on('message', handleWorkerMessage);
            }
        } else {
            // Simulate some computation in the worker thread
            try {
                const result = workerData * 2;
                parentPort.postMessage({ status: 'resolved', data: result });
            } catch (error) {
                // Log the error details
                console.error(`Error in worker thread: ${error.message}`);
                console.error(error.stack);

                // Send a special value to indicate an error
                parentPort.postMessage({ status: 'error', data: null, error: error.message, stack: error.stack });

                // Terminate the worker with an exit code indicating an error
                process.exitCode = 1;
            }
        }
    });
};

const run = async () => {
    try {
        const results = await performCalculations();
        console.log(results);
    } catch (error) {
        console.error(`Error during calculations: ${error.message}`);
    } finally {
        // Log the exit code of the worker thread after all workers have completed
        console.log(`Worker exit code: ${process.exitCode}`);
    }
};

run();
