import { parentPort, workerData, isMainThread} from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const result = nthFibonacci(workerData);
  console.log('Data was sent successfully');
if (!isMainThread) {
  parentPort.postMessage(result);
}
};


sendResult();

