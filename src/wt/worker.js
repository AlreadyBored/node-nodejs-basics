// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (args) => {
  const prepareData = {
    'status': Number.isInteger(Number(...args)) ? 'resolved' : 'error',
    'data': Number.isInteger(Number(...args)) ? nthFibonacci(Number(...args)) : null,
  }
  process.send(JSON.stringify(prepareData));
};

sendResult(process.argv.slice(2));
