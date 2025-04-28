const { Worker, isMainThread, parentPort } = require('worker_threads');
const os = require('os');


const performCalculations = async () => {
  const numWorkers = os.cpus().length; 
  const results = [];
  let nextNumber = 10; 

  return new Promise((resolve, reject) => {
    let workersFinished = 0;

    for (let i = 0; i < numWorkers; i++) {
      const worker = new Worker('./worker.js');

      worker.postMessage(nextNumber);
      nextNumber++;

      worker.on('message', (message) => {
        results.push(message); 
        workersFinished++;

        if (workersFinished === numWorkers) {
          resolve(results);
        }
      });

      worker.on('error', (err) => {
        results.push({ status: 'error', data: null });
        workersFinished++;

        if (workersFinished === numWorkers) {
          resolve(results);
        }
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          results.push({ status: 'error', data: null });
          workersFinished++;

          if (workersFinished === numWorkers) {
            resolve(results);
          }
        }
      });
    }
  });
};

performCalculations()
  .then((results) => {
    console.log('Results:', results); 
  })
  .catch((err) => {
    console.error('Error:', err);
  });
