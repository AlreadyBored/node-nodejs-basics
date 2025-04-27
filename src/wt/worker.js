import {Worker, parentPort} from 'node:worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', (data)=>{
        try{
            parentPort.postMessage({ status: 'resolved', data: nthFibonacci(data) })
        }
        catch(e){
            parentPort.postMessage({ status: 'error', data: null })
        }
    });
};

sendResult();