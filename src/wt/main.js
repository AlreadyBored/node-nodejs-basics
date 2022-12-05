import * as os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const cores = os.cpus().length;

let arr = [];

const performCalculations = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  for (let i = 0; i < cores; i += 1) {
    arr.push(new Worker(path.join(__dirname, 'worker.js')));
    arr[i].postMessage(i + 10);
    arr[i].on('message', (message) => {
      arr[i] = {status: 'resolved', data: message};
      if (i == arr.length - 1) {
        console.log(arr);
        process.exit();
      }
    });
    arr[i].on('error', () => {
      arr[i] = {status: 'error', data: null};
      if (i == arr.length - 1) {
        console.log(arr);
        process.exit();
      }
    });
  }
};

await performCalculations();
