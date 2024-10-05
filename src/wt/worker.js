// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    self.postMessage({
        status: 'resolved',
        data: result
    })
};

self.onmessage((event) => {
    const n = event.data;
    const result = nthFibonacci(n);
    sendResult(result);
});