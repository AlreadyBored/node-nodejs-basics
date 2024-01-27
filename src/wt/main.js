import {Worker} from 'worker_threads'
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'worker.js';
    const filePath = path.join(__dirname, fileName);


    const createWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(filePath, {workerData: n})
            worker.on('message', (result) => {
                resolve({status: 'resolved', data: result})
            })
            worker.on('error', (error) => {
                reject({status: `${error}`, data: null})
            })
        })
    }

    // the number of workers depends on number cores of CPU
    const numCpu = (await import('os')).cpus().length;

    const manageWorkers = async (numCpu) => {
        let arrOfWorkerPromises = [];

        for (let i = 0; i < numCpu; i++) {
            const dataToSend = i + 10;
            arrOfWorkerPromises.push(createWorker(dataToSend));
        }
        const results = await Promise.allSettled(arrOfWorkerPromises);
        console.log(results)
    }
    await manageWorkers(numCpu)


};

await performCalculations();