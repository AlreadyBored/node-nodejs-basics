import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

export const sendResult = (data) => {
  // This function sends result of nthFibonacci computations to main thread

	const result = nthFibonacci(data);

	return result;
};

parentPort.postMessage(sendResult(workerData));

