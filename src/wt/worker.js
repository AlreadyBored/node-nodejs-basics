import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => {
  const result = n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
  return result;
};

parentPort.addEventListener('message', ({ data: n }) => {
  const result = nthFibonacci(n);
  self.postMessage(result);
});
