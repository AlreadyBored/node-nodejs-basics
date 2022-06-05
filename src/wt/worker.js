
import {Worker, isMainThread, workerData,parentPort} from 'worker_threads'

if(isMainThread){    
     const worker = new Worker('./worker.js', {
        workerData: 2
      });
      worker.on('message', msg => {
          console.log('Message from parent:', msg)
      })

} else {
    const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    
    const sendResult = () => {
        parentPort.postMessage(nthFibonacci(workerData));
    };
    
     sendResult()
}