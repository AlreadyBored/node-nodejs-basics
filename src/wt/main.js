import {cpus} from 'node:os';
import {Worker} from 'node:worker_threads';
import { dirname ,join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = join(__dirname, 'worker.js')


const performCalculations = async () => {
    const cpusArray = cpus();
    let number = 10;

    const runWorkers = await Promise.allSettled(cpusArray.map(() =>{
        return new Promise((resolve, reject) =>{
            const worker = new Worker (__dirname + '/worker.js', {workerData:number++});

            worker.on('message', message => resolve(message));
            worker.on('message', message => reject(message));
        });
    }));

    const result = runWorkers.map(item=> (
        {
            status: item.status === 'fulfilled' ? 'resolved' : 'error',
            data: item.status === 'fulfilled' ? item.value : null
        }
    ))
    console.log(result)


};

await performCalculations();