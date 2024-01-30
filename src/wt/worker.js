const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // Receive data from the main thread
    self.onmessage = (event) => {
        const n = event.data;

        // Perform the computation
        const result = nthFibonacci(n);

        // Send the result back to the main thread
        self.postMessage(result);
    };
};

sendResult();
