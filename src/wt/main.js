import { Worker } from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {

    // Get the number of CPU cores
    const numCores = os.cpus().length;
    // Resolve the path to the worker file
    const workerFilePath = path.resolve("./worker.js");
    // Create an array to store the results
    const results = [];

    // Function to create a worker
    const createWorker = (index) => {
        // Return a promise to handle the worker
        return new Promise((resolve) => {
            // Create a new worker
            const worker = new Worker(workerFilePath);
            // Define the data to send to the worker starting from 10
            const dataToSend = 10 + index;

            // Send data to the worker
            worker.postMessage(dataToSend);

            // Listen for messages from the worker
            worker.on("message", (value) => {
                resolve({ status: "resolved", data: value });
            });

            // Handle errors
            worker.on("error", () => {
                resolve({ status: "error", data: null });
            });
        });
    };

    // Create workers for each core
    for (let i = 0; i < numCores; i++) {
        results.push(createWorker(i));
    }

    // Wait for all workers to finish and log the results
    const finalResults = await Promise.all(results);
    console.log(finalResults);
};

// Call the performCalculations function
await performCalculations();