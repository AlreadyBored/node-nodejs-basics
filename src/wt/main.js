import { sendResult, nthFibonacci } from "./worker.js";

export const performCalculations = async () => {
  sendResult();
};
performCalculations();
