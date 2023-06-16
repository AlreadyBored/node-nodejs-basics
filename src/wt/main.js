import os from "os";
import wt from "worker_threads";
import path from "path";

const startNumber = 10;
const coreNumber = os.cpus().length;
const workerPath = path.resolve("src/wt/worker.js");

const performCalculations = async () => {
    const allWorkers = [];

    for (let i = 0; i < coreNumber; i++) {
        const workerData = startNumber + i;

        const workerPromise = new Promise((resolve, reject) => {
            const worker = new wt.Worker(workerPath, { workerData });

            worker.on("message", resolve);
            worker.on("error", reject);
        });

        allWorkers.push(workerPromise);
    }

    const results = await Promise.allSettled(allWorkers);

    const formattedResults = results.map((result) => {
        const status = result.status === "fulfilled" ? "resolved" : "error";
        const data = result.value ?? null;
        return { status, data };
    });

    console.log(formattedResults);
};

await performCalculations();
