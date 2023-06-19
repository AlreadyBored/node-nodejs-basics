import os from 'node:os';
import { Worker, workerData } from 'node:worker_threads';

const performCalculations = async () => {
    // Write your code here
    try {
        const cpuCount = os.cpus().length;
        console.log(`Available logical CPU cores: ${cpuCount}`);
        
        const startNumber = 10;
        let resultArray = new Array;
        let workersPull = new Array;

        for (let index = 0; index < cpuCount; index++) {
            resultArray.push(new Object);

            workersPull.push( new Object);
            workersPull[index].status = 1;
        };

        for (let i = 0; i < cpuCount; i++) {
            resultArray[i] = {status: 'init', data: null}

            workersPull[i].workers = new Worker('./src/wt/worker.js', { workerData: {nth: startNumber + i} });
            workersPull[i].status = 1;

            workersPull[i].workers.on('message', (data) => {
                const index = workersPull.findIndex(item => item.workers.threadId === workersPull[i].workers.threadId)

                resultArray[index].status = 'resoved';
                resultArray[index].data = data;

                console.log(`worker ${index}(${workersPull[i].workers.threadId}) => main: ${data}`);
            });

            workersPull[i].workers.on('error', () => {
                const index = workersPull.findIndex(item => item.workers.threadId === workersPull[i].workers.threadId)

                resultArray[index].status = 'error';
                resultArray[index].data = null;
            });

            workersPull[i].workers.on('exit', (code) => {
                if (code !== 0) {
                    const index = workersPull.findIndex(item => item.workers.threadId === workersPull[i].workers.threadId)
                    resultArray[index].status = 'error';
                    resultArray[index].data = null;
                }
                workersPull[i].status = 0;

                let finished = 0;
                for (let k = 0; k < cpuCount; k++) {
                    finished = finished + workersPull[k].status;
                }

                if (finished === 0) {
                    console.log('The results are: ', resultArray);
                }
            });

        }

    } catch (error) {
        console.log(error.message);
    }
};

await performCalculations();