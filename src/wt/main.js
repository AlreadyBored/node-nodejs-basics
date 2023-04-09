import {Worker} from 'worker_threads'
import path from 'path'
import {cpus} from 'os'
import { fileURLToPath } from 'url';

const fileName = 'worker.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, fileName)

const performCalculations = async () => {
    const cpu = cpus();
    let number = 10;
    const workers = await Promise.allSettled(cpu.map(()=>{
        return new Promise((resolve, reject)=>{
            const worker = new Worker(filePath, {
                workerData: number++
            })

            worker.on('message', message => resolve(message))
            worker.on('error', message => reject(message))

        })
    }));

    const results = workers.map(el => {
        return {
            status: el.status === 'fulfilled' ? 'resolved' : 'error',
            data: el.status === 'fulfilled' ? el.value : null 
        }
    })
    console.log(results);
};

await performCalculations();