import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const outputResults = results => {
  console.log(results);
};

const performCalculations = async () => {
  if (isMainThread) {
    const logicalCoreCount = os.cpus().length;
    let results = [];
    const promises = [];
    console.log(`Number of logical CPU cores: ${logicalCoreCount}`);

    for(let c = 0; c < logicalCoreCount; c++) {      
      promises.push(new Promise(resolve => {
        const worker = new Worker('./worker.js');

        worker.on('message', result => {
          results[c] = result;
          resolve();
        });
        
        worker.on('error', (error) => {
          results[c] = { status: 'error', data: null };
          resolve();
        });
        
        worker.on('exit', (code) => {
          if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
          }
        });
        
        worker.postMessage({ number: c + 10 });
      }));
    }

    try {
      await Promise.all(promises);
    } catch (err) {
      console.error('An error happened in Promise.all: ', err);
    }
    outputResults(results);
    process.exit(0);
  }
};

await performCalculations();
