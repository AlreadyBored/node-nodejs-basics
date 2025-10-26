import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const cpuCount = cpus().length;
  console.log(`Number of CPU cores: ${cpuCount}`);
  
  const workers = [];
  
  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(path.join(__dirname, 'worker.js'));
    workers.push(worker);
  }
  
  const promises = workers.map((worker, i) => {
    return new Promise((resolve) => {
      const data = 10 + i;
      worker.postMessage(data);
      
      worker.on('message', (message) => {
        resolve({ status: 'resolved', data: message });
      });
      
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    });
  });
  
  const results = await Promise.all(promises);
  
  workers.forEach(worker => worker.terminate());
  
  console.log(results);
};

await performCalculations();
