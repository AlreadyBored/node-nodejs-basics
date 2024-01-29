import {Worker, isMainThread} from 'node:worker_threads';
import {resolve} from 'node:path';
import {cpus} from 'node:os';

const performCalculations = async () => {
    const filePath = resolve('src', 'wt', 'worker');

    const CPU_CORES_COUNT = cpus().length;

    const promises = [];

    if (isMainThread) {
        for (let i = 0; i <= CPU_CORES_COUNT; i++) {

            const promise = new Promise((resolve, reject) => {
                const worker = new Worker(filePath, {
                    workerData: {n: 10 + i},
                });

                worker.on("message", resolve);
                worker.on("error", reject);
            })

            promises.push(promise);
        }
    }

    return Promise.allSettled(promises)
        .then(results => results.map((result) =>
            result.status === 'fulfilled'
                ? ({status: 'resolved', data: result.value})
                : ({status: 'error', data: null})))
        .then(console.log);
};

await performCalculations();