    import { parentPort } from 'worker_threads';

    const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

    const sendResult = () => {
        parentPort.on('message', (data) => {
            console.log(data);
            const result = nthFibonacci(data);
            parentPort.postMessage(result);
        })

        parentPort.postMessage(3);
    };

    sendResult();