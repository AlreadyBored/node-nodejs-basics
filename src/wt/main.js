import {cpus} from "os";
import {Worker} from "worker_threads"

const performCalculations = async () => {
    const workerUrl = new URL("./worker.js", import.meta.url);
    const start_number = 10;

    const calculateFibanachi = (workerData) => new Promise((res) => {
        const worker = new Worker(workerUrl, {workerData});

        worker.on("message", (val) => res({status: "resolve", val}));
        worker.on("error", () => res({status: "error", val: null}));
    });

    const calc = new Array(cpus().length).fill(null).map((val, ind) => calculateFibanachi(ind + start_number))

    const data = await Promise.all(calc);

    console.log(data);
};

await performCalculations();