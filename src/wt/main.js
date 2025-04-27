const performCalculations = async () => {
  const n = 10; 

  const worker = new Worker("./worker.js");

  worker.postMessage(n);

  worker.on("message", (message) => {
    if (message.status === "resolved") {
      console.log(`The Fibonacci number for n=${n} is: ${message.data}`);
    } else {
      console.log("Error occurred in worker");
    }
    worker.terminate();
  });

  worker.on("error", (err) => {
    console.error("Error in worker:", err);
    worker.terminate();
  });
};

await performCalculations();
