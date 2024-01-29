    import { Worker, isMainThread } from 'worker_threads';
    import os from 'os';

    const performCalculations = async () => {
        const results = [];
        const cores = os.cpus().length;
        const promises = [];
        if (isMainThread) {
            for (let i = 0; i < cores; i++) {
                const temp = [];
                const worker = new Worker('./worker.js');

                const workerPromise = new Promise((resolve, reject) => {
                    
                    worker.on('message', (message) => {
                        temp.push(10 + i);
                        temp.push('resolve');
                        resolve(temp);
                    });

                    worker.on('error', (err) => {
                        temp.push(10 + i);
                        temp.push('error');
                        reject(temp);
                    });
                });

                promises.push(workerPromise);
            }

            await Promise.all(promises).then((res) => {
                results.push(...res);
                console.log(results);
            }).catch((err) => {
                console.log(err);
            })
        }
    };

    await performCalculations();