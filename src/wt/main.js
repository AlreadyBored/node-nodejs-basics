import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";
import { stderr, stdout } from "process";
import { cpus } from "os";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWorker = (num) => {
  return new Promise((res, rej) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), { workerData: { num } });
    worker.on("message", res);
    worker.on("error", rej);
    worker.on("exit", code => {
      if (code !== 0) {
        rej(new Error(`Unexpected exit wit code = ${code}.`));
      }
    });
  });
};

export const performCalculations = async () => {
  try {
    const coresNum = cpus().length;
    stdout.write(`\t\t\t-----WAS CREATED ${coresNum} WORKERS-----\n`);
    let num = 10;
    let res = [];
    for (let i = 0; i < coresNum; i += 1) {
      let data;
      try {
        data = await createWorker(num);
      }
      catch {
        data = null;
      };
      const status = data ? "resolved" : "error";
      num += 1;
      res.push({status, data});
    }
  res.forEach((el, index) => stdout.write(`The ${index + 1}th worker returned { status: ${el.status}, data: ${el.data} }. \n`) );  
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err}`);
  };
};

//performCalculations();