import  { Worker, isMainThread, workerData } from 'node:worker_threads'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const __filename = path.join(__dirname, 'worker.js')

const performCalculations = async () => {
    // Write your code here
    let sumArr = []
   const sum = async () => {
    for(let i=0; i<os.cpus().length; i++){
       const val = await new Promise((resolve, reject) => {

            const worker =  new Worker(__filename, {
              workerData: 10+i,
        });
            worker.on('message', (data) => resolve({
                status:'resolved',
                data
            }));
            worker.on('error', (data) => resolve({
                status: 'error',
                data: null
            }));
        })
        sumArr.push(val)
    }}
    await sum()
    let res = await Promise.all(sumArr)
    console.log(res)
    
};

await performCalculations();