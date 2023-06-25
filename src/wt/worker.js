import { parentPort, workerData } from 'worker_threads'; //  to work with data received from the main thread and send the result back, I used this module in Node.js

// n should be received from main thread
const nthFibonacci = (n) =>
	n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
	// This function sends result of nthFibonacci computations to main thread
	const result = nthFibonacci(workerData); // let calculate the 10th Fibonacci number
	parentPort.postMessage(result); // send the result to the main thread
};

sendResult(); // invoke the sendResult function to send the result to the main thread
