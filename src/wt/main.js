import os from 'os'
import {Worker} from 'worker_threads'
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createWorker = (index,cpuNum) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'));  // Создаем воркер

    worker.postMessage(cpuNum + index);  //

    return new Promise((resolve, reject) => {
        worker.on('message', (result) => {
            resolve({data:result})
        });

        worker.on('error', (error) => {
            reject({  data: null });
        });


    })
};
//create workers cpuNum time
const performCalculations = async () => {
    const cpuNum = os.cpus().length
    console.log(cpuNum)
    const workers = []
    for(let i = 0 ; i < cpuNum; i++){
        const worker = createWorker(i, cpuNum)
        workers.push(worker)
    }

    const results = await Promise.allSettled(workers);
    const formattedResult = results.map((result) => {
        if(result.status==='fulfilled'){
            return {status:'resolved', data:result.value.data}
        }else{
            return {status:'error', data:result.value.data}
        }
    })
    console.log(formattedResult);
};

await performCalculations();