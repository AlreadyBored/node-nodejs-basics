import { cpus } from 'os'
import { join } from 'path'
import { Worker } from 'worker_threads'
import { getFileDirName } from '../utils/utils.js'

export const performCalculations = async () => {
    let incrementalNumber = 10
    const numOfCpus = cpus().length
    const arrOfNum = [...Array(numOfCpus)].map(() => incrementalNumber++)
    const { __dirname } = await getFileDirName(import.meta.url)
    const workerPath = join(__dirname, 'worker.js')

    const arrOfPromisifiedWorkers = arrOfNum.map(elem => {
        const worker = new Worker(workerPath, {
            workerData: { data: elem }
        })

        return new Promise((resolve, reject) => {
            worker.on('message', result => resolve({
                    status: 'resolved',
                    data: result
                })
            )

            worker.on('error', err => reject({
                    status: 'error',
                    data: null
                })
            )
        })
    })

    const results = await Promise.all(arrOfPromisifiedWorkers)
    console.log(results)
}

performCalculations()
