import { parentPort, MessagePort } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (x) => {
  parentPort.postMessage(x);
};

parentPort.on('message', async (message) => {
  const result = await nthFibonacci(message);
  sendResult(result);
});

//sendResult();
