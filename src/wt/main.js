import { join, dirname } from 'node:path';
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from  'node:url';
const performCalculations = async () => {
  const cores = cpus().length;
  const workers = [];
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  for (let i = 0; i < cores; i += 1) {
    const worker = new Worker(join(__dirname, 'worker.js'));
    workers.push({ worker, n: 10 + i });
  }

  const promises = workers.map(({ worker, n }) => {
    return new Promise((res) => {
      worker.once('message', (result) => {
        res({ status: 'resolved', data: result });
      });

      worker.once('error', () => {
        res({ status: 'error', data: null });
      });

      worker.postMessage(n);
    });
  });

  const result = await Promise.all(promises);
  console.log(result);
  process.exit(0);

};

await performCalculations();
