import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
    const cp = cpus();
    let number = 10;
    const worckersResults = await Promise.allSettled(cp.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(__dirname + '/worker.js', {
                workerData: number++
            })
            worker.on('message', msg => resolve(msg))
            worker.on('error', msg => reject(msg))
        })
    }))

    const results = worckersResults.map(i => ({
        status: i.status === 'fulfilled' ? 'resolved' : 'error',
        data: i.status === 'fulfilled' ? i.value : null
    }));

    console.log(results);

    return results;
};

await performCalculations();