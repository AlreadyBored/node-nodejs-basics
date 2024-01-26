import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerFile = join(__dirname, "worker.js");

const performCalculations = async () => {
    if (isMainThread) {
        const num = os.cpus().length;
        const results = new Array(num);

        for (let i = 0, completedWorkers = 0; i < num; i++) {
        const worker = new Worker(workerFile, { workerData: 10 + i });
        worker
            .on("message", (result) => {
                results[i] = { status: "resolved", data: result };
                completedWorkers++;
                if (completedWorkers === num) {
                console.log(results);
                }
            })
            .on("error", (error) => {
                results[i] = { status: "error", data: null };
                completedWorkers++;
                if (completedWorkers === num) {
                console.log(results);
                }
            });
        }
    }
};

await performCalculations();
