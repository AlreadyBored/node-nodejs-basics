import { parentPort, workerData } from 'worker_threads'; // modules to work with data received from the main thread and send the result back

// n should be received from main thread
const nthFibonacci = (n) =>
	n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// func sends result of nthFibonacci computations to main thread
const sendResult = () => {
	const result = nthFibonacci(workerData); // calculate the Fibonacci number
	parentPort.postMessage(result); // send the result to the main thread
};

sendResult();
