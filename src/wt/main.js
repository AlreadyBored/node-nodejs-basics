import {
    Worker,
    isMainThread,
} from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
    const workerPath = path.join(path.resolve(''), 'wt', 'worker.js');
    if (isMainThread) {
        const thread = Array(os.cpus().length).fill(null);
        thread.forEach((thread, index, array) => {
          
          array[index] = new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: 10 + index } );
            worker.on('message', ({ result } ) => { 
                resolve(result);
                worker.terminate();
            });
            worker.on('error', error => {
                reject(error);
                worker.terminate();
            });
            worker.on('exit', code => {
                reject(code);
            });
          });
        })
        await Promise.allSettled(thread).then((values) => {
            console.log(values.map(({ status, reason, value }) => {
                const resolved = status === 'fulfilled';
                return {
                    status: resolved ? 'resolved' : 'error',
                    data: resolved ? value : null,
                };
             }));
    });
    }
};

await performCalculations();