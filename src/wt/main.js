const performCalculations = async () => {
    const { Worker, isMainThread, parentPort } = require('worker_threads')
    const os = require('os');

    if (isMainThread) {
        const cpuQuantity = os.cpus().length
        const workers = []
        const results = []
        let workersFinished = 0;

        const handleWorkerCompletion = () => {
            workersFinished++;

            if (workersFinished === cpuQuantity) {
                console.log(results);
            }
        };

        for (let i = 0; i < cpuQuantity; i++) {

            const worker = new Worker(`${__dirname}/worker.js`, { workerData: 10 + i })

            worker.on('message', result => {

                const resObj = {
                    status: 'resolved',
                    value: result
                }

                results.push(resObj)
                handleWorkerCompletion();

            })


            worker.on('error', error => {

                const resObj = {
                    status: 'error',
                    value: null
                }

                results.push(resObj)
                handleWorkerCompletion();

            })

            workers.push(worker)
        }

    }

};

// await 
performCalculations();