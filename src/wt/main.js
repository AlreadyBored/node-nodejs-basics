import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
    const pathToWorker = path.resolve(__dirname, 'worker.js');
    const numCPUs = cpus().length;
    const countStart = 10;
    const countEnd = 10 + numCPUs;
    const listPromises = [];

    for (let i = countStart; i < countEnd; i++) {
        const worker = new Worker(pathToWorker);
        const prm = new Promise(((resolve, reject) => {
            worker.once('message', resolve);
            worker.on('error', reject);
            worker.postMessage(i + 1);
        }));

        listPromises.push(prm);
    }

    const result = await Promise.allSettled(listPromises);

    const data = result.map(({ status, value }) => {
        return {
            status: status === 'rejected' ? 'error' : 'resolved',
            data: value || null,
        }
    });

    console.log(data);

    return data;
};

performCalculations();
