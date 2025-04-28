import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const createThread = async (argThread) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: argThread });
        worker.on('message', res);
        worker.on('error', rej);
    })
}
const performCalculations = async () => {
    const threads = []
    for (let i = 10; i < 10 + cpus().length; i++) {
        threads.push(createThread(i));
    }

    const resConsole = [];
    const results = await Promise.allSettled(threads);
    for (let elem of results) {
        resConsole.push({
            status: elem.status === 'fulfilled' ? 'resolved' : 'error',
            data: elem?.value ? elem.value : null,
        });
    }
    console.log(resConsole);
};

await performCalculations();