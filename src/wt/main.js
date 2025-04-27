import {Worker, isMainThread} from 'worker_threads';
import os from 'os'
const performCalculations = async () => {
    if(!isMainThread){
        console.error('This function should be called from main thread.')
    }
    const coresCount=os.cpus().length;
    const workers=[];
    const results=new Array(coresCount).fill(null);
    let completed=0;

    for(let i=0;i<coresCount;i++){
        const worker=new Worker('./worker.js');
        workers.push(worker);

        const data=10+i;
        worker.postMessage(data);

        worker.on('message',(result)=>{
            results[i]=result;
            completed++;

            if(completed===coresCount){
                console.log(results);
            }
        });

        worker.on('error', (err) => {
            console.error(`Worker ${i} error:`, err);
            results[i] = { status: 'error', data: null };
            completedWorkers++;
            
            if (completedWorkers === numWorkers) {
                console.log(results);
            }
        });

        worker.on('exit', (code) => {
            if (code !== 0 && !results[i]) {
                console.error(`Worker ${i} exited with code ${code}`);
                results[i] = { status: 'error', data: null };
                completedWorkers++;
                
                if (completedWorkers === numWorkers) {
                    console.log(results);
                }
            }
        });
    }
};

await performCalculations();