import { Worker } from "worker_threads";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const workersSize = cpus().length;

  const workers = [];
  const workPath = path.join(__dirname, "worker.js")
  const workOpt = {
    workerData: { num: i },
  }

  for (let i = 10; i < workersSize + 10; i++) {
    const worker = new Promise((resolve, reject) => {
      let worker = new Worker(workPath, workOpt);
      worker.on("message", resolve);
      worker.on("error", reject);
    })
    workers.push(worker);
  }


  let res = await Promise.allSettled(workers);
  console.log(res.map(e => {
    e.status = e.status == "fulfilled" ? "resolved" : "error";
    return e;
  }));

};

await performCalculations();
