import { cpus } from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const resultsPool = [];
    for (let i = 0; i < cpus().length; i++) {
        await runWorkers(i + 10).then(
            result => {
                resultsPool.push({status: 'resolved', data: result});
            },
            error => {
                resultsPool.push({status: 'error', data: null});
                console.log(error);
            }
        );
    }
    return resultsPool;
};

function runWorkers(n) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js');
        worker.postMessage(n);
        worker.on('message', data => {
            worker.unref();
            resolve(data);
        });
        worker.on('error', err => {
            worker.unref();
            reject(err);
        });
        worker.on('exit', code => {
            worker.unref();
            if (code !== 0) {
                reject(new Error(`worker thread exit code: ${code}`));
            }
        });
    });
}

async function runCalculations() {
    const result = await performCalculations();
    console.log(result);
}

await runCalculations();