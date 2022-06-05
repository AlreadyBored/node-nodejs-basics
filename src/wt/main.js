import { Worker } from 'worker_threads';
import { cpus } from 'os';

const START_NUMBER_OF_CALCULATE = 10;

export const performCalculations = async () => {
    const cpuCores = cpus();

    const resultArray = await Promise.all(
        cpuCores.map(async (cpuCore, index) => {
            const promisedWorkerResult = new Promise((resolve, reject) => {
                const worker = new Worker('./worker.js', {
                    workerData: START_NUMBER_OF_CALCULATE + index,
                });
                worker.on('message', resolve);
                worker.on('error', reject);
            });

            return promisedWorkerResult.then(
                (calculatedResult) => {
                    return {
                        status: 'resolved',
                        data: calculatedResult,
                    };
                },
                () => {
                    return {
                        status: 'error',
                        data: null,
                    };
                },
            );
        }),
    );

    console.log(resultArray);
};

performCalculations();
