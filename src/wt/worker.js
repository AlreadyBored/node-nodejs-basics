import { workerData, parentPort } from 'worker_threads'

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (n) => {
    const result = nthFibonacci(n)
    parentPort.postMessage(result)

    // принимает данные из основного потока и отправляет результат вычисления обратно в главный поток
    // This function sends result of nthFibonacci computations to main thread
};

sendResult(workerData)