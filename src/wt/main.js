import {
  Worker,
  isMainThread,
  workerData,
  threadId,
  parentPort,
} from "worker_threads";

import { URL } from "url";
import { nthFibonacci } from "./worker.js";
import { cpus } from "os";

const numCPUs = cpus().length;
let num = 10;
const resalt = [];
const resalts = [];

export const performCalculations = async () => {
  if (isMainThread) {
    for (let index = 0; index < numCPUs; index++) {
      const element = num++;
      const worker = new Worker(new URL(import.meta.url), {
        workerData: element,
      });

      worker.once("message", ([threadId, status, data]) => {
        resalt.push([threadId, status, data]);

        if (+resalt.length === +numCPUs) {
          resalt.sort((a, b) => {
            if (a[0] < b[0]) {
              return -1;
            }
            if (a[0] > b[0]) {
              return 1;
            }
            return 0;
          });
          for (const i of resalt) resalts.push({ status: i[1], data: i[2] });

          console.log("for index:", index);
          console.log("numbers Cpus", numCPUs);
          console.log("Resalts:", resalts);
        }
      });
    }
  } else {
    let status = "";
    let data;
    try {
      try {
        data = nthFibonacci(+workerData);
      } catch (error) {
        throw new Error("error");
      }
      status = "resolved";
    } catch (error) {
      if (error) {
        status = error.message;
        data = null;
      }
    } finally {
      parentPort.postMessage([threadId, status, data]);
    }
  }
};
performCalculations();
