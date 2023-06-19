import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

class WorkerWrapperModel extends Worker {
  constructor(filename, options) {
    super(filename, options);
    this.resultPromise = new Promise(this.registerListeners.bind(this));
  }

  registerListeners(res) {
    let data = null;
    this.on('message', message => data = message );
    this.on('exit', exitCode => {
      res({ status: exitCode === 0 ? 'resolved' : 'error', data });
    } );
  }
}

const performCalculations = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workerScriptFile = `${__dirname}/worker.js`;

    const workers = await Promise.all(cpus().reduce((res, val, i) => {
      const worker = new WorkerWrapperModel(workerScriptFile, {workerData: i+10});
      return [...res, worker.resultPromise];
    }, []));

    console.log(workers);
};

await performCalculations();