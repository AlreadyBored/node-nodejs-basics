import { Worker, BroadcastChannel } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { cpus } from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const numCPUs = cpus().length;
    const bc = new BroadcastChannel('chanel1');
    let counter = 0;
    let dataFromWorkers = [];

    const printResult = () => {
        dataFromWorkers.sort((a, b) => {
            if (a.id<b.id) return -1;
            if (a.id>b.id) return 1;
            return 0;
        });
        const result = dataFromWorkers.map(obj => ({
            status: obj.status,
            data: obj.data,
        }));
        console.log(result)
        bc.close();
        process.exit();
    }

    for (let n = 0; n < numCPUs; n++) {
        const worker = new Worker(`${__dirname}/worker.js`, {
            workerData: n + 10
        });
        worker.on('error', (err) => {
            dataFromWorkers.push({
                status: 'error',
                data: null,
                id: n + 10,
            })
            counter+=1;
            if (counter === numCPUs) printResult();
        });
    }

    bc.onmessage = (event) => {
        dataFromWorkers.push({
            status: event.data.result ? 'resolved' : 'error',
            data: event.data.result || null,
            id: event.data.id,
        })
        counter+=1;
        if (counter === numCPUs) printResult();
    };
    
};

await performCalculations();