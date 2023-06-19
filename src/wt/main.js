import { Worker } from "worker_threads";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import os from 'os';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpuNumber = os.cpus().length;
    const execFile = path.join(__dirname, "worker.js");
    let n = 10;
    const calculations = [];

    for (let i = 0; i < cpuNumber; i++) {
        const singleCalculation = new Promise((resolve, reject) => {
            const worker = new Worker(execFile, { workerData: n++ });
            worker.on("message", (result) => resolve({ status: "resolved", data: result }));
            worker.on("error", (error) => reject({ status: "error", data: error }));
        });
        calculations.push(singleCalculation);
    }

    Promise.all(calculations).then((data) => console.log(data)).catch((e) => console.error(e));
};

await performCalculations();