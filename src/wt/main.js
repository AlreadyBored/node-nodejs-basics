import { Worker } from 'worker_threads';
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWorker(data) {
    return new Promise((res, rej) => {
        const worker = new Worker(resolve(__dirname, './worker.js'));

        worker.postMessage(data);
        worker.once('message', response => {
            res(response);
            worker.terminate();
        });
        worker.once('error', () => {
            rej();
            worker.terminate();
        });
        worker.once('exit', (code) => {
            if (code !== 0) {
                rej(new Error(`Worker stopped with exit code ${code}`));
            }
        });

        return worker;
    })
}

const performCalculations = async () => {
    const data = cpus().map((_, index) => createWorker(10 + index));

    await Promise.allSettled(data)
        .then(data => console.log(mapData(data)));
};

const mapData = (data) => {
    return data.map(item => {
        const succeed = item.status === 'fulfilled';

        return succeed ? { status: 'resolved', data: item.value } : { status: 'error', data: null };
    })
}

await performCalculations();
