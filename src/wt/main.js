import { Worker, BroadcastChannel } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bc = new BroadcastChannel('worker');

export const performCalculations = async () => {
    const fileName = 'worker.js';
    const startNumber = 10;
    let count = 0;
    let result = [];

    bc.onmessage = (message) => {
        result.push(message.data);
        if (count >= 3) {
            bc.close();
            console.log(result)
        }
        count += 1;
    };

    bc.onmessageerror = (message) => {
        result.push({ status: 'error', data: null })
    }
    for (let n = 0; n < 4; n += 1) {
        new Worker(`${__dirname}/${fileName}`, { workerData: n + startNumber });
    }

};

performCalculations();
