import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
// parentPort.on('message', msg => {
//   xFromMainThread = mgs;
// });
const sendResult = () => {
  const xFromMainThread = workerData;
  //console.log(xFromMainThread);
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(nthFibonacci(xFromMainThread));
  };

sendResult();