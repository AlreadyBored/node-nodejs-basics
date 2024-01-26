import {availableParallelism} from 'node:os';
import { Worker } from 'node:worker_threads';
import { getDir } from '../utils.js';
import path from 'node:path';

const dir = getDir(import.meta.url);
const workerPath = path.join(dir, 'worker.js');
const START = 10;
const arr = Array(availableParallelism()).fill(0);

const performCalculations = async () => {
    const promisesArr = arr.map((_, i) => 
        new Promise ((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: START + i});

            worker.on('message', value => {
                resolve({
                    status: 'resolved',
                    data: value 
                });
            });

            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null
                });
            });

        })
    );
    const res = await Promise.all(promisesArr);
    console.log(res);
    
};

await performCalculations();