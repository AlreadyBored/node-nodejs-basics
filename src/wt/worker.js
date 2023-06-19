// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const { parentPort, workerData } = await import('node:worker_threads');
const sendResult = () => {
  const output = nthFibonacci(workerData);
  parentPort.postMessage({ output, type: `done` });
};

sendResult();
