// n should be received from main thread
/**extend given function to work with data received from main thread and implement function 
 * which sends result of the computation to the main thread
 */

import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.once('message', (message) => {
        // if (message == 12){  throw new Error('Test error'); }
        parentPort.postMessage(nthFibonacci(message));
      });   
};

sendResult();