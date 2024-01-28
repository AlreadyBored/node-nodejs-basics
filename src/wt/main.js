import * as os from 'os';
import path from 'path';
import {Worker} from 'worker_threads';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const cpus = os.cpus().length;
    const workerFilePath = path.join(__dirname, 'worker.js');
    const workers = [];
    let count = 10;
    for (let i = 0; i < cpus; i++) {
        const worker = new Worker(workerFilePath, {
            workerData: {count: count++},
        });
        worker.on('message', (message) => {
            console.log(`Worker ${worker.threadId} message:`, message);
        });
        worker.on('error', (error) => {
            console.log(`Worker ${worker.threadId} error:`, error);
        });
        workers.push(worker);
    }

    await Promise.all(workers.map(worker => new Promise(resolve => worker.once('exit', resolve))));
    console.log("All workers finished.");
};

await performCalculations();