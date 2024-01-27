import { Worker} from 'worker_threads';
import os from 'os'
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerFilePath = join(__dirname, 'worker.js');

const performCalculations = async () => {
    let allCores = os.cpus();
    // console.log('numCores = ', numCores);
    // numCores = 2

    let results = [];
    let currentNumber = 10;

    results = await Promise.allSettled(allCores.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerFilePath, {workerData: currentNumber++});
        worker.on('message', (message) => {          
          //console.log(`Worker ${currentNumber}:`, message);
          return resolve(message);
        });
        worker.on('error', (message) => {          
          return reject(message);
        });
      });
    }));

    // console.log("results = ", results);

    const output = results.map((k) => {
      return {
        'status': k.status === 'fulfilled' ? 'resolve' : 'error',
        'data': k.status === 'fulfilled' ? k.value : null,
      }
    });

    console.log("output = ", output);
    return output;

};   

await performCalculations();