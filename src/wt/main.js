import path from 'path';
import { Worker } from 'node:worker_threads';
import os from 'os';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PathtoWorker = path.join(__dirname, 'worker.js');
console.log(PathtoWorker)


const performCalculations = async () => {
  const result = [];

  const createWorker = (i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(PathtoWorker, {
        workerData: { value: i }
      });

      worker.on('message', (message) => {
        result.push({ status: 'resolved', data: message.toString() });
        resolve();
      });

      worker.on('error', (error) => {
        result.push({ status: 'error', data: null });
        reject(error);
      });

      worker.on('exit', () => {
        if (i === 10 + os.cpus().length) {
          process.stdout.write(JSON.stringify(result));
        }
      });
    });
  };

  for (let i = 10; i <= 10 + os.cpus().length; i++) {
    try {
      await createWorker(i);
    } catch (error) {
      console.error('Error occurred in worker:', error);
    }
  }
};

await performCalculations();