import { cpus } from 'os';
import { Worker } from 'worker_threads'

const performCalculations = async () => {

    const workerFile = './src/wt/worker.js'

    const cpu = cpus();

    let number = 10;
    
    const arrResult = await Promise.allSettled( cpu.map ( (cpu, index) => {
        return new Promise ((res, rej) => {
            const worker = new Worker (workerFile, {
                workerData: number + index
            });

            worker.on('message', msg => res(msg))
            worker.on('error', msg => rej(msg))
        })
    }))

    console.log(arrResult.map( ({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    })));
};

await performCalculations();