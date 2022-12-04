import {Worker} from 'worker_threads';
import {cpus} from 'os';


const performCalculations = async () => {
    try {
        const cpusArr = cpus();
        const workersPromises = cpusArr.map((cpu, index) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker('./worker.js', {
                    workerData: 10 + index
                })
                worker.on('message', (message) => {
                    if (message) {
                        resolve({
                            status: 'resolved',
                            data: message
                        })
                    } else {
                        reject(
                            {
                                status: 'error',
                                data: null
                            }
                        )
                    }
                })
            })
        })
        const allSettledArr = await Promise.allSettled(workersPromises);
        const workerPromisesResultArr = allSettledArr.map(item => item.value);
        console.log(workerPromisesResultArr);

    } catch (error) {}
};

await performCalculations();