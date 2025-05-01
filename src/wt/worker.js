// n should be received from main thread
const nthFibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i += 1) {
    [a, b] = [b, a + b];
  }

  return a;
};

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
};

sendResult();
