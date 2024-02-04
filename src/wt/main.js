import { Worker } from 'worker_threads';

const performCalculations = (n) => {
  const worker = new Worker(new URL('./nthFibonacci.mjs', import.meta.url), { type: 'module' });

  worker.on('message', (result) => {
    console.log(`Result of nthFibonacci(${n}):`, result);
  });

  worker.postMessage(n);
};

performCalculations();