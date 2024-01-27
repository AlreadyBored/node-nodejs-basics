import worker_threads from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    if (worker_threads.isMainThread) {
        let results = [];
        const workerPath = './src/wt/worker.js';
        const cores = os.cpus().length;
        for (let i = 0; i < cores; i++) {
            const worker = new worker_threads.Worker(workerPath);
            worker.postMessage(i + 10);
            worker.on('message', (res) => {
                results.push(res);
                if (i === cores - 1) {
                    console.log(results);
                }
            });
        }
    }
};

await performCalculations();
