import { Worker } from "worker_threads";
import path, { resolve } from "path";
import {cpus} from "os";
import { getDirnameFromUrl } from "../utils/utils";

const START_NUMBER = 10;

const __dirname = getDirnameFromUrl(import.meta.url);
const workerScript = path.join(__dirname, "worker.js");

const fibonacciWorkerService = (number) => new Promise (resolve => {
    const worker = new Worker(workerScript, { workerData: number});

    worker.on('message', data => resolve({
        status:"resolve",
        data
    }));

    worker.on('error', data => resolve({
        status:"error",
        data:null
    }));
})


const performCalculations = async () => {
    const workersPool = Array.from({length: cpus().length}, (_, i)=>fibonacciWorkerService(START_NUMBER + i));
    const result = await Promise.all(workersPool);
    console.log(result);
};

await performCalculations();