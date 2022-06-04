import os from 'os';
import { EventEmitter } from 'events';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class WorkerPool extends EventEmitter {
    _workers = [];
    _results = [];

    constructor(workerFile) {
        super();
        this.workerFile = workerFile;
        this.init(os.cpus().length);
    }
  
    init(amountThreads) {
        for (let i = 0; i < amountThreads; i++) {
            const worker = new Worker(path.resolve(this.workerFile));
            worker.on('message', data => this.pushResult(i, 'resolved', data));
            worker.on('error', () => this.pushResult(i, 'error', null));
            this._workers.push(worker);
        }
    }
  
    run(statedValue) {  
        this._workers.forEach((worker, i) => worker.postMessage(statedValue + i));
        return this;
    }

    pushResult(number, status = 'resolved', data) {
        this._results.push({number, status, data});
        
        if (this._results.length === this._workers.length) {
            this.sendResults();
        }
    }

    sendResults() {
        const result = this._results.sort((a, b) => a.number - b.number)
            .map(({status, data}) => ({status, data}));
        this.emit('completed', result);
        this.clear();
    }
  
    clear() {
      this._workers.forEach(w => w.terminate());
    }
}

export const performCalculations = async () => {
    const pool = new WorkerPool(path.join(__dirname, 'worker.js'));
    pool.run(10);
    pool.on('completed', data => console.log(data));
};

performCalculations();