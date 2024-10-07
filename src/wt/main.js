import { Worker } from "worker_threads";
import os from "os";

const workerPath = new URL("worker.js", import.meta.url);

const performCalculations = async () => {
	const number = 10;
    const promises = [];
	for (let i = 0; i < os.cpus().length; i++) {
		const promise = new Promise((resolve) => {
			const worker = new Worker(workerPath, {
				workerData: number + i,
			});

			worker.on("message", (data) => {
				resolve({
				    status: "resolved",
					data,
				});
			});

			worker.on("error", () => {
				resolve({
					status: "error",
					data: null,
				});
			});
		});
        promises.push(promise);
	}
    console.log(await Promise.all(promises));
};

await performCalculations();