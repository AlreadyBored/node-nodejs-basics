import {Worker, isMainThread} from 'worker_thread'
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if(isMainThread){
        
    }
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();