import { cpus } from 'os'
import { Worker } from 'worker_threads';

const cpu = cpus();
console.log(cpu.length)

export const performCalculations = async (path) => {
  const arr = [];
  for (let i = 0; i < cpu.length; i++) {
    const runWorker = new Promise((resolve, reject) => {
      const worker = new Worker(path, {workerData: { num: 10 + i }})
      worker.on('message',result => resolve({ status: 'resolved', value: `${10 + i}th Fibonacci Number: ${result}` }))
      worker.on('error', err => resolve({ status: 'error', value: 'null' }))
      worker.on("exit", exitCode => {
        console.log(5, exitCode);
      })
    })
    arr.push(runWorker)
  }
  return await Promise.all(arr);
};
performCalculations('./worker.js').then(result => console.log(result));

