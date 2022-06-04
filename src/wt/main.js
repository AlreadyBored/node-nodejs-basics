import {Worker} from "worker_threads"
import os from "os"
import {fileURLToPath} from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, "worker.js")

export const performCalculations = async () => {
    const cpuQuantity = os.cpus().length
    const resArr = []

    for (let i = 0; i < cpuQuantity; i++) {
        await new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {workerData: 10 + i})
            worker.on("message", (msg) => {
                resArr.push({status: "resolve", data: msg})

            })
            worker.on("error", (msg) => {
                resArr.push({status: "reject", data: null})

            })
            worker.on("exit",resolve)
        })


    }
   return resArr

};
//performCalculations()