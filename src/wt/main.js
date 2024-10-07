import { cpus } from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
    const cpuss = cpus();
    let number = 10;
    let completedWorkers = 0;
    const resultArray = [];
    for (let cpu of cpuss) {
        function logIfDone() {
            completedWorkers++;
            if (cpuss.length === completedWorkers) {
                console.log(resultArray);
            }
        }
        const worker = new Worker("./src/wt/worker.js");
        worker.postMessage(number++);
        worker.on('message', (result) => {
            resultArray[result[0] - 10] = { status: 'resolved', data: result[1]};
            logIfDone();
        });
        worker.on('error', (result) => {
            resultArray[result[0] - 10] = { status: 'error', data: null};
            logIfDone();
        })
    }
   
};

await performCalculations();