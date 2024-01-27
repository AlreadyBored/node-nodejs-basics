import { workerData, parentPort} from 'worker_threads';

export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
  const result = parentPort.postMessage(nthFibonacci(workerData));
  // console.log(`workerData = ${workerData} | result = ${result}`);
  return parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
