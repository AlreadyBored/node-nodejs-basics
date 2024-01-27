import os from "os"
import * as url from 'url';
import path from "path";
import { Worker } from "worker_threads";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const workerPath = path.join(__dirname, "worker.js");
const numCPUs = os.cpus().length;
const startNumber = 10;

function createWorkerThreads(number) {
    const promises = [];

    for(let i = 0; i < numCPUs; i++) {
        const currentNumber = number + i;

        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: currentNumber,
            });

            worker.on('message', (data) => resolve({
                status: "resolved",
                data: data,
            }
            ));

            worker.on('error', () => resolve ({
                status: "error",
                data: null,
            }
            ));
        })
        promises.push(promise);
    }
    return promises;
};

const performCalculations = async () => {
    const workersPool = createWorkerThreads(startNumber);
    const answer = await Promise.all(workersPool);
    console.log(answer);
};

await performCalculations();



