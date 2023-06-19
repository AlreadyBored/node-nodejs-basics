import {Worker, isMainThread} from 'worker_threads'
import os from 'os'
const performCalculations = async () => {
    if (isMainThread) {
        for (let i = 0; i < os.cpus().length; i++) {
            const worker = new Worker('./src/wt/worker.js', { workerData: i + 10 });
            worker.on('message', message => {
                console.log('message',message)
            })
        }
    }

};

await performCalculations();
