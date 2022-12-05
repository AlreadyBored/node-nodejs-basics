import {Worker} from "worker_threads"
import os from "os";

const performCalculations = async (data) => {
    // Write your code here
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', {
            workerData: data
        })

        worker.on('message', (msg) => {
            resolve({
                status: 'resolved',
                data: msg
            })
        })

        worker.on('error', () => {
            reject({
                status: 'error',
                data: null
            })
        })
    })
};
const cpuCoreValues = os.cpus().map((core, index) => performCalculations(10+index));
const result = await Promise.all(cpuCoreValues);
console.log(result)