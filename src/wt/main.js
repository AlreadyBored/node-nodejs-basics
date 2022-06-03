import { Worker, workerData, parentPort, isMainThread } from "worker_threads";
import * as os from "os";
import {fileURLToPath} from "url";
import {dirname} from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const performCalculations = async () => {
    console.log(" I am main");
    const cpuCoresCount = os.cpus().length;
    const promises = [];
    console.log(`CPU cores count : ${cpuCoresCount}`);
    for (let i =1; i<=cpuCoresCount; i++){
        const promise = new Promise((resolve, reject) => {
            try{
                const worker = new Worker(path.join(__dirname,  'worker.js'), {workerData: 10+i}).on("message", message=>{
                    console.log( " received message from worker: " + message);
                    resolve(message);
                })
            }
            catch (e) {
                reject(e);
            }
        })
        promises.push(promise);
    }

    const data=  await Promise.allSettled(promises);

    // transforming data to required format
    const result = [];
    for (const item of data) {
        let status="";
        let data = null;
        if (item.status == "fulfilled") {
            status = "resolved";
            data = item.value;
        }
        else {
            status = "error";
        }
        result.push({status,data})

    }
   return result;
};

console.log(await performCalculations());