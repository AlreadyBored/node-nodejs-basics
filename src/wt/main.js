import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const cpuCount = os.cpus().length;

    const workers = Array.from({ length: cpuCount }, (_, i) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'));

        worker.postMessage(10 + i);
    
        return new Promise(resolve => {
            worker.on('message', data => {
                resolve({ status: 'resolved', data });
                worker.terminate();
            });
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', code => code !== 0 && resolve({ status: 'error', data: null }));
        });
    });

    const results = await Promise.all(workers);

    console.log(results);
    // process.stdout.write(JSON.stringify(results, null, 2) + '\n');
};

performCalculations();