import { parentPort } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    process.stdin.on('data', (data) => {
        // Process the data (in this case, just convert to uppercase)
        const result = data.toString().toUpperCase();
      
        // Send the result back to the main thread via stdout
        process.stdout.write(result);
    });
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();