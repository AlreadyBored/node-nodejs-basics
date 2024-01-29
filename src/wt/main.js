import { Worker } from "worker_threads"
import { cpus } from "os";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workerPath = path.join(__dirname, "worker.js")
    const initialValue = 10;
    const cpusAmount = cpus().length;
    const workerPromiseResult = [];

    for(let index = 0; index < cpusAmount; index++) {
        workerPromiseResult.push(
            new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: initialValue + index });
            worker.on("message", resolve)
            worker.on("error", reject)
        }))
    }

    const workerResults = await Promise.allSettled(workerPromiseResult)

    const formattedWorkerResults = workerResults.map(({ status, value }) => {
        return status === "fulfilled" ? { status: "resolved", value } : { status: "error", value: null }
    })

    console.log(formattedWorkerResults);

};

await performCalculations();
