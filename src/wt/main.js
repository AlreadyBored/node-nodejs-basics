import { Worker } from 'worker_threads';
import path from 'path';
import os from 'os';
const __dirname = path.dirname(process.argv[1]);

export const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    const results = [];

    for (let i = 0; i < cpuCount; i++) {
        await new Promise((res) => {
            new Worker(path.join(__dirname, './worker.js'), {
                workerData: 10 + i
            })
                .on('message', (message) => {
                    results.push({status: 'resolved', data: message})
                })
                .on('error', () => {
                    results.push({status: 'error', data: null});
                    res();
                })
                .on('exit', res)
        })


    }
    return results
};

// console.log(await performCalculations());