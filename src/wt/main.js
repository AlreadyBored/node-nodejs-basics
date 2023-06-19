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

    const printResult = () => {
        if(res.length === cpN) {
            const sorted = res.sort((a, b) => {
                if (a.i > b.i) {
                    return 1
                }

                return -1;
            });
            console.log(sorted.map(({ status, data }) => ({status, data})));
        }
    }

    for (let i = 0; i < cpN; i++) {
        const worker = new Worker(`${__dirname}/worker.js`, {
            workerData: data
        });
        
        worker.on('message', (data) => {
            res.push({ status: 'resolved', data, i });
            printResult();
        });

        worker.on('error', () => {
            res.push({ status: 'error', data: null, i });
            printResult();
        });

        data++;
    }
};

await performCalculations();
