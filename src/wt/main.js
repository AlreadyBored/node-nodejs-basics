import {Worker} from 'worker_threads';
import { cpus } from 'os';
import path, { dirname } from 'path';
import url from 'url';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const INITIAL_VALUE = 10;
  
  const calcWorker = (workerData) => new Promise((resolve, reject)=> {
    const worker = new Worker(path.join(__dirname, 'worker.js'), {workerData});
    worker.on('message', (data) => resolve({status: 'resolved', data: data}));
    worker.on('error', ()=> reject({status: 'error', data: null}))
  })

  const workerPromises = cpus().map((value, index) => calcWorker(INITIAL_VALUE + index))
  const results = (await Promise.allSettled(workerPromises)).map((result) =>
                  result.status === 'fulfilled' ? result.value : result.reason);  

  console.log(results);  
};

await performCalculations();
