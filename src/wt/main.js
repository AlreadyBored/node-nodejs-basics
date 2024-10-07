/*
* implement function that creates number of worker threads (equal to the number of host machine logical CPU cores)
* from file worker.js and able to send data to those threads and to receive result of the computation from them.
* You should send incremental number starting from 10 to each worker.
* The results are array of objects with 2 properties:
* status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
* data - value from worker in case of success or null in case of error in worker
*/
import os from 'node:os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const numberCPUs = os.cpus().length;
    console.log('Number of CPU cores:', numberCPUs);

    const results = [];
    let finished = 0;

    const checkFinish = (result, i) => {
        results[i] = result;
        finished++;
        if (finished === numberCPUs) {
            console.log('RESULTS:');
            console.log(results);
        }
    };

    for (let i = 0; i < numberCPUs; i++) {
        const result = {
            'status': '',
            'data': ''
        };
        const worker = new Worker('./src/wt/worker.js', {
            workerData: {n: 10 + i}
        }); 
       
        worker.on('message', (data) => {
            checkFinish({
                'status': 'resolved',
                'data': data
            }, i);
        });
        worker.on('error', (err) => {
            checkFinish({
                'status': 'error',
                'data': null
            }, i);
        });
    }
};

await performCalculations();