import os from "os";
import { fileURLToPath } from "url";
import path from "path";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'worker.js');
const beginNumber = 10;

const performCalculations = async () => {
    const result = [];
    const cpus = os.cpus();

    cpus.map((el, i) => {
        const worker = new Worker(filePath, {
            workerData: beginNumber + i,
        });

        worker.on('message', (data) => {
            result.push({
                status: 'resolved',
                data
            });
        });

        worker.on('error', () => {
            result.push({
                status: 'error',
                data: null
            });
        });

        worker.on('exit', () => {
            if (cpus.length === result.length) {
                console.log(result);
                process.exit();
            }
        });
    })
};

await performCalculations();