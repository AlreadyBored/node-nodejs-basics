import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';

const performCalculations = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const cpu_s = cpus();
    let number = 10;

    const workerResults = await Promise.all(
        cpu_s.map(() => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(__dirname + '/worker.js', {
                    workerData: number++
                })

                worker.on("message", (msg) => resolve(msg));
                worker.on("error", (err) => reject(err));
            })
        })
    )

    const totalCpusResults = workerResults.map(({ status, value }) => ({
        status: status == "fulfilled" ? "resolved" : "error",
        data: status == "fulfilled" ? value : null,
    }))

    console.log(totalCpusResults);
    return totalCpusResults;
};

await performCalculations();