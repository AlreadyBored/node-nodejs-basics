import { cpus } from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "worker.js");
const startFibonacciNum = 10;

const performCalculations = async () => {
    let promises = [];

    for (let i = 0; i < cpus().length; i++) {
        const promise = new Promise((resolve) => {
            new Worker(filePath, { workerData: i + startFibonacciNum })
                .on("message", (data) => resolve({ status: "resolved", data }))
                .on("error", () => resolve({ status: "error", data: null }));
        });
        promises.push(promise);
    }

    const workerResults = await Promise.all(promises);

    console.log(workerResults);
};

await performCalculations();
