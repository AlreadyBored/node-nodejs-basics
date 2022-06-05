import { Worker, BroadcastChannel } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToWorker = join(__dirname, 'worker.js');
  const bc = new BroadcastChannel('fibonacci');

  let count = 0;
  let result = [];
  bc.onmessageerror = (event) => {
    result.push({ status: 'error', data: null });
  };
  bc.onmessage = (event) => {
    result.push(event.data);
    if (++count === 4) {
      bc.close();
      setTimeout(() => console.log(result), 0);
    }
  };
  for (let n = 0; n < 4; n++) {
    new Worker(pathToWorker, { workerData: n + 10 });
  }
};

performCalculations();
