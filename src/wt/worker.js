// n should be received from main thread
import ws from 'worker_threads';
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const number = nthFibonacci(ws.workerData);

  ws.parentPort.postMessage(number)
};

sendResult();
