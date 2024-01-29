import os from 'os'
import {Worker} from 'worker_threads'

const performCalculations = async () => {
    // Write your code here
    const results = Array(os.cpus().length).fill(null);
    let finishedCores = 0


    const checkCoresStatus = () => {
        if (finishedCores === os.cpus().length) {
            console.log(finishedCores)
        }
    }

    for await (const core in os.cpus()) {
        const worker = new Worker('./worker.js', {workerData: 10 + core})
        worker.on('message', (n) => {
            results[core] = {
                status: 'resolved',
                data: n
            }
            finishedCores += 1
            checkCoresStatus()
        })

        worker.on('error', () => {
                results[core] = {
                    status: 'error',
                    data: null
                }
            finishedCores += 1
            checkCoresStatus()
            }
        )
    }
};

await performCalculations();