import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { access } from 'node:fs/promises'
import { Worker } from 'node:worker_threads'
import { cpus } from 'node:os';

const performCalculations = async () => {
    const pathToFile = '/worker.js';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${pathToFile}`);
    } catch {
        throw new Error('Error to access file');
    }

    const processors = cpus();
    let n = 10;

    const workersResults = await Promise.allSettled(processors.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(`${__dirname}${pathToFile}`, {
                workerData: n++,
            })

            worker.on('message', message => resolve(message));
            worker.on('error', message => reject(message));
        })
    }));

    const finalResults = workersResults.map(el => {
        return {
            status: el.status === 'fulfilled' ? 'resolved' : 'error',
            data: el.status === 'fulfilled' ? el.value : null,
        }
    })

    console.log(finalResults);
};

await performCalculations();