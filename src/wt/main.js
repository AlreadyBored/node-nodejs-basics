import { Worker } from "worker_threads";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import os from "os";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const createWorker = (data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirName, "worker.js"), {
            workerData: data,
        });
        worker.on("message", (message) =>
            resolve({ status: "resolved", data: message })
        );
        worker.on("error", () => reject({ status: "error", data: null }));
    });
};

const performCalculations = async () => {
    let workersPull = [];
    const availableParallelism = os.availableParallelism();
    for (let index = 0; index < availableParallelism; index++) {
        const worker = createWorker(index + 10000);
        workersPull.push(worker);
    }

    const calculationResults = (await Promise.allSettled(workersPull)).map(
        (result) =>
            result.status === "fulfilled" ? result.value : result.reason
    );
    console.log(calculationResults);
};

await performCalculations();
