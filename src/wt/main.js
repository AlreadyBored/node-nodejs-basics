import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpN = cpus().length;
    let data = 10;
    const res = [];

    for (let i = 0; i < cpN; i++) {
        const worker = new Worker(`${__dirname}/worker.js`, {
            workerData: data
        });

        worker.on('message', (data) => {
            res.push({ status: 'resolved', data })
            if(res.length === cpN) {
                console.log(res);
            }
        });

        worker.on('error', () => {
            res.push({ status: 'error', data: null });
            if(res.length === cpN) {
                console.log(res);
            }
        });

        data++;
    }
};

await performCalculations();
