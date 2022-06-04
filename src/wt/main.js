import * as workerJS from 'worker_threads';
import * as os from 'os';

export const performCalculations = async () => {
    const cpuD = os.cpus()
    const arr = []
    for(let i = 1; i <= cpuD.length; i++){
        arr.push(
            new Promise((resolve, reject) => {
                     new workerJS.Worker('./wt/worker.js', {
                        workerData: 10 + i
                    }).on('message', msg =>{
                         resolve(msg)
                     })
            })
        )
        }
    const result = await Promise.all(arr)
    return  result

};
console.log(await performCalculations())