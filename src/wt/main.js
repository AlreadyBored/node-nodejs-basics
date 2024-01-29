const { Worker } = require('worker_threads');
const { promisify } = require('util');

const performCalculations = async () => {
    // Write your code here
    const numCPUs = require('os').cpus().length;
    const results = [];

    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker('./worker.js', { workerData: i + 10 });
        const onMessage = promisify(worker.on.bind(worker, 'message'));

        await onMessage((result) => {
            results.push(result);
        });
    }

    console.log('Results:', results);
};

await performCalculations();