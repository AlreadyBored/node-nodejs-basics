import { cpus} from 'os';
import { Worker } from 'worker_threads';

const workerFile = './worker.js';
const pathToFile = new URL(workerFile, import.meta.url);

const performCalculations = async () => {
    const countCpus = cpus().length;
    const workerArr = new Array(countCpus).fill(null);

    const getFibonachi = (workerData) => new Promise ((resolve) =>{
        const worker = new Worker(pathToFile, { workerData});

        worker.on('message', (data) => resolve({ status: 'resolve', data}));
        worker.on('error', () => resolve({ status: 'error', data: null}));
    });
    const getResult = workerArr.map((_, index) => getFibonachi(index + 10));
    const data = await Promise.all(getResult);
    console.log(data);
    
};

await performCalculations();