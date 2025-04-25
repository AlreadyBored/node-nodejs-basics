import { availableParallelism } from "node:os";
import { Worker, isMainThread, parentPort } from "node:worker_threads";

const performCalculations = async () => {
    // Write your code here
    if (isMainThread) {
        const results = [];
        const promises = [];
        for (let i = 0; i < availableParallelism(); i++) {
            results[i] = { data: null, status: null };
            promises.push(
                new Promise((resolve, reject) => {
                    const worker = new Worker(new URL(`file://${import.meta.dirname}/worker.js`), {
                        workerData: 10 + i,
                    });
                    worker.on("message", (m) => {
                        results[i].status = "resolved";
                        results[i].data = m;
                        resolve(m);
                    });
                    worker.on("error", (err) => {
                        results[i].status = "error";
                        results[i].data = null;
                        reject(err);
                    });
                    worker.on("exit", (code) => {
                        if (code !== 0) {
                            results[i].status = "error";
                            results[i].data = null;
                            reject(new Error(`Worker stopped with exit code ${code}`));
                        }
                    });
                })
            );
        }
        const workerResults = await Promise.all(promises);
        console.log(results);
    }
};

await performCalculations();
