import {fileURLToPath} from "url";
import {Worker} from "worker_threads";
import path from "path";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const START_NUMBER = 10;

const calcNthFibonacci = (workerData) => {
    return new Promise((resolve) => {
        const worker = new Worker(
            path.join(__dirname, 'worker.js'),
            { workerData },
        );

        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', (message) => resolve({status: 'error', data: null}));
    });
}

const performCalculations = async () => {
    const data = await Promise.all(
        cpus().map((_, index) => calcNthFibonacci(START_NUMBER + index)),
    )
    console.log(data)
};

await performCalculations();
