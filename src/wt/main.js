import { cpus } from "os";
import { Worker } from "worker_threads";
import { join } from "path";

import { __dirname } from "./../fs/utils/fs.js";

const INITIAL_NUM = 10;
const numCPUs = cpus().length;
const path = join(__dirname, "wt", "worker.js");
const statuses = {
    fulfilled: "resolved",
    rejected: "error",
};

const compute = (data) =>
    new Promise((res, rej) => {
        const worker = new Worker(path, {
            workerData: data,
        });

        worker.on("message", res);

        worker.on("error", rej);
    });

const performCalculations = async () => {
    const workers = [];
    for (let workerNum = 0; workerNum < numCPUs; workerNum++) {
        workers.push(compute(INITIAL_NUM + workerNum));
    }

    (await Promise.allSettled(workers)).forEach(({ status, value }) =>
        console.log({
            status: statuses[status],
            data: value ?? null,
        })
    );
};

await performCalculations();
