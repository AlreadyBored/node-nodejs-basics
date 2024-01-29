import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


// To check order and error
// const nthFibonacci = (n) =>  {
//     if(n === 15) {
//         throw new Error;
//     }
//     return n;
// };

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const nthFib = nthFibonacci(workerData);
    parentPort.postMessage(nthFib);
  
};

sendResult();