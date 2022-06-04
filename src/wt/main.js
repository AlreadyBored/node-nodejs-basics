import { Worker } from 'worker_threads';
import { cpus } from 'os';


export const performCalculations = async () => {
    const numberTreads = cpus().length;
    let startNumber = 10;
    // const answers = [];

    // for (let i = 0; i < numberTreads; i++) {
    //     const worker = new Worker('./worker.js');

    //     worker.postMessage(startNumber);
    //     worker.on('message', msg => {
    //         const answer = {
    //             status: 'resolved',
    //             data: msg
    //         }
    //         answers.push(answer);
    //     });

    //     worker.on('error', msg => {
    //         const answer = {
    //             status: 'error',
    //             data: null
    //         }
    //         answers.push(answer);
    //     });

    //     startNumber += 1;
    // }

    // console.log(answers);

    const worker = new Worker('./worker.js');

    worker.postMessage(startNumber);
    worker.on('message', msg => {
        console.log(msg);
    });

};

performCalculations();
