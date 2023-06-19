const performCalculations = async () => {
  const os = await import('node:os');
  const { Worker } = await import('node:worker_threads');
  let threadsCount = os.availableParallelism();
  const workerUrl = new URL('./worker.js', import.meta.url);
  let dataToSend = 10;
  const dataFromWorker = [];
  const workers = [];
  const workerPromise = (data, script) =>
    new Promise((resolve, reject) => {
      const worker = new Worker(script, { workerData: data });
      worker.on('message', (msg) => {
        if (msg?.type === 'done') resolve(msg.output);
      });
      worker.on('error', () => resolve(null));
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`smtg wrong`));
      });
    });

  while (threadsCount > 0) {
    workers.push(workerPromise(dataToSend, workerUrl));
    threadsCount -= 1;
    dataToSend += 1;
  }
  Promise.allSettled(workers).then((results) => {
    results.forEach((res) => {
      const data = res.value;
      data
        ? dataFromWorker.push({ status: 'resolved', data })
        : dataFromWorker.push({ status: 'error', data: null });
    });
    console.log(dataFromWorker);
  });
};

await performCalculations();
