import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
const __dirname = path.resolve();
const pathToFile = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const workersResults = [];  

    const createWokers = (num) => new Promise((resolve, reject) => {
        const worker = new Worker(pathToFile, { workerData: 10 + num });

        worker.on('message', value => {           
            resolve(workersResults.push({status: 'resolved', data: value}));    
        }); 
    
        worker.on('error', _err => {    
            reject(workersResults.push({status: 'error', data: null}));                                                 
        });  
        
        worker.on('exit', (exitCode) => {
            if (exitCode === 0) {
              return null;
            }
         
            return reject(new Error(`Worker has stopped with code ${exitCode}`));
          });
    })

    const cores = cpus();
    for (let i = 0; i < cores.length; i++) {
        await createWokers(i);
    }
    
    console.log(workersResults);
};

await performCalculations();
