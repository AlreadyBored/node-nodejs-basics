import { cpus } from "os";
import { Worker } from "worker_threads";

import { getPath } from "./../fs/utils/fs.js";

const INITIAL_NUM = 10;
const path = getPath("wt", "worker.js");
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
    const workers = cpus().map((_, index) => compute(INITIAL_NUM + index));

    const result = (await Promise.allSettled(workers)).map(
        ({ status, value }) => ({
            status: statuses[status],
            data: value ?? null,
        })
    );
    console.log(result);
};

await performCalculations();
