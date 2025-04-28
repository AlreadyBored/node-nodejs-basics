import { Worker, isMainThread } from 'node:worker_threads';

const createWorkerThreadPromise = (fibno, coreNo) =>
    new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: fibno });
        worker.on('message', (result) => {
            // console.log(`Result received from worker ${coreNo}: `, result);
            const workerResult = { status: 'resolved', data: result, workerNo: coreNo }
            console.log('workerResult: ', workerResult)
            resolve(workerResult);
        }),
        worker.on('error', (reject) => {
            console.log(`Error Result received from worker ${coreNo}: `, reject);
            const errorResult = { status: 'error', data: null };
            reject;
        });
    });

const performCalculations = async () => {
    if (isMainThread) {
        Promise.allSettled([
            createWorkerThreadPromise(10, 1),
            createWorkerThreadPromise(11, 2),
            createWorkerThreadPromise(12, 3),
            createWorkerThreadPromise(13, 4)])
            .then(results => {
                console.log('Promise results: ', results);
            })
            .catch(error => {
                console.error('Errors: ', error);
            })
            .finally(() => {
                console.log('The promise has completed'); 
            });
    }
};

await performCalculations();