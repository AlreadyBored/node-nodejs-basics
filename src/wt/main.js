import {Worker} from 'worker_threads';
import path from 'path';
import os from 'os';

import { getDir } from '../utils/getDir.js';

const CORES_NUMBER = os.cpus().length;
const START_NUMBER = 10;

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'worker.js');

const results = [];

const performCalculations = async () => {
    for(let i = 0; i < CORES_NUMBER; i++){
        const n = START_NUMBER + i;
        const worker = new Worker(filename);
        worker.postMessage(n);
        
        worker.on('message', (fib) => {
            results.push({status: 'resolved', data: fib})
            if(results.length === CORES_NUMBER){
                console.log(results);
                process.exit();
            }
        })

        worker.on('error', () => {
            results.push({status: 'error', data: null})
            if(results.length === CORES_NUMBER){
                console.log(results);
                process.exit();
            }
        })
    }
};

await performCalculations();