// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  process.on("message", (n) => {
    const result = nthFibonacci(n);
    process.send(result);
  });
};

sendResult();
