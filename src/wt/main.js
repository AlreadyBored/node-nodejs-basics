import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const res = [];
    const promises = [];

    for (let i = 0; i < numCPUs; i += 1) {
        const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: { num: 10 + i } });

        promises.push(
            new Promise(resolve => {
                worker.on('message', (result) => {
                    res[i] = {
                        status: 'resolved',
                        data: result
                    };
                    resolve();

                })

                worker.on('error', () => {
                    res[i] = {
                        status: 'error',
                        data: null
                    };
                    resolve();
                })
            })
        )
    }

    Promise.all(promises).then(() => {
        console.log(res);
    });
};

await performCalculations();