import {Worker} from 'worker_threads';
import os from 'os'

const performCalculations=async () => {

    console.log("Number of available CPUs: ",os.cpus().length, '\n');

    const fibDataArr = await Promise.all(os.cpus().map((cpu,idx) =>

        new Promise((resolve, reject) => {
            const worker=new Worker("./src/wt/worker.js",{workerData: idx+10})
            worker.on('message',(message) => resolve({status: 'resolved', data: message}))
            worker.on('error',(() => resolve({status: 'error', data: null})))
            worker.on('exit', (code) => resolve({status: `exited with code: ${code}`, data: null}))

        })
    ))
    
    console.log(fibDataArr)

};

await performCalculations();