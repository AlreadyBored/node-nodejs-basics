import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
    const workerFilePath = new URL("./worker.js", import.meta.url);
    const numberOfCPUs = cpus().length;
    const rangeFrom10 = [...Array(numberOfCPUs).keys()].map(next => next + 10);

    const promises = rangeFrom10.map(n => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerFilePath);
            worker.postMessage(n);
    
            worker.on("message", (data) => {
                resolve({
                    status: "resolved",
                    data
                });
            })

            worker.on("error", (err) => {
                reject({
                    status: "error",
                    data: null
                });
            })
        });
    });

    Promise.allSettled(promises)
        .then((results) => console.dir(results.map(next => next.value)));
};

await performCalculations();