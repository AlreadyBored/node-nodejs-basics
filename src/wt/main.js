import * as os from "os";

import {isMainThread, Worker} from "worker_threads";

const performCalculations = async () => {
    // Write your code here
    const cpuCount = os.cpus().length
    console.log("cpuCount", cpuCount)
    // console.log(isMainThread)

    // generate array with random numbers
    function randomArray(length, max) {
        return Array.apply(null, Array(length)).map(function() {
            return Math.round(Math.random() * max);
        });
    }

    if(isMainThread) {
        const input = randomArray(100, 200);
        // run thread and pass info
        const worker = new Worker('./worker.js', { workerData: { value: input } });
        worker.on('message', (result) => {
            console.log(result);
        });
        worker.on('exit', (code) => {
            if (code !== 0)
                throw new Error(`Worker stopped with exit code ${code}`);
            else
                console.log('Worker stopped ' + code);
        });
    }

    // if(isMainThread) {
    //     const __filename = fileURLToPath(import.meta.url);
    //     console.log('main thread start...');
    //     const worker = new Worker(__filename);
    //     worker.on('message', (msg) => {
    //         console.log(`Worker: ${msg}`);
    //     });
    //
    //     console.log("doing some random work in main thread..!!");
    // }else{
    //     parentPort.postMessage('hello from worker thread');
    //     cpuIntensiveTask(1000);
    //     parentPort.postMessage('i am working');
    //     cpuIntensiveTask(1000);
    //     parentPort.postMessage('task is done..!!');
    // }
    //
    // function cpuIntensiveTask(timeInSecond) {
    //     const end = Date.now() + timeInSecond;
    //     while (Date.now() < end) { }
    // }
};

await performCalculations();