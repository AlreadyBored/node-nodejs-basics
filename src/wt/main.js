import ws from 'worker_threads';
import os from "os";
import {dirname} from "path";
import {fileURLToPath} from "url";

const numOfCpus = os.cpus().length;
let ten = 10;
const performCalculations = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));

  const createWorker = (n) => {
    return new Promise((res, rej)=> {
      const worker = new ws.Worker(`${dir}/worker.js`, {
        workerData: n
      });

      worker.on('message', (msg) => {
        if (typeof msg === 'number') {
          res({status: 'resolved', data: msg});
        }
        else {
          res({status: 'rejected', data: null});
        }
      });

      worker.on('error', (msg) => {
        rej({status: 'error', data: null});
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          rej({status: 'error', data: null});
        }
      });
    });
  }

  const promises = [];

  for (let i = 0; i < numOfCpus; i++, ten++) {
    promises.push(createWorker(ten));
  }

  const results = (await Promise.allSettled(promises)).map((result) =>
    result.status === 'fulfilled' ? result.value : result.reason
  );

  console.log(results);
};

await performCalculations();
