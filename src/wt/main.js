import * as os from "node:os";
import {sendResult} from "./worker.js";

const performCalculations = async () => {
    const cpus = os.cpus();
    const promises = cpus.map((_, i) => sendResult(10 + i));
    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();
