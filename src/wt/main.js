import {Worker} from 'worker_threads';
const worker = new Worker('./worker.js', {workerData: 12});

export const performCalculations = async () => {

};