import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker, isMainThread} from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const workerFile = `${dirname(fileURLToPath(import.meta.url))}/worker.js`;
    const CpuCores = cpus().length;
    const workers = [];
    let increment = 10;
    let result = [];

    const getResult = (worker) => new Promise((resolve) => {
        worker.on('message', (data) => {
            resolve ({ status: 'resolved', data })
        })
        worker.on('error', () => {
            resolve ({status: 'error', data: null})
        })
    })

    for(let c = 0; c < CpuCores; c++){
        workers.push(new Worker(workerFile))
        workers[c].postMessage(increment)
        increment += 1;

        result.push(await getResult(workers[c]))
        
    }
    console.log(result)
       
};

await performCalculations();