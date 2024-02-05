import os from "node:os";
import { colors } from "../utils/colorize.js";

const systemInfo = os.EOL;
const cpus = os.cpus();
const homeDir = os.homedir();
const userInfo = os.userInfo();
const architecture = os.arch();

export const systemEol = (...args) => {
  args[1].forEach((arg) => {
    if (arg === "--EOL") {
      console.log("System End-Of-Line: ", JSON.stringify(systemInfo));
    } else if (arg === "--cpus") {
      let cpuInfos = [];
      cpus.forEach((cpu, index) => {
        let cpuInfo = {};
        cpuInfo["Model"] = cpu.model;
        cpuInfo["Clock Rate"] = `${parseInt(cpu.speed) / 1000} GHz`;
        cpuInfos.push(cpuInfo);
      });
      console.table(cpuInfos);
    } else if (arg === "--homedir") {
      console.log("Home Directory: ", homeDir);
    } else if (arg == "--username") {
      console.log("System username: ", userInfo.username);
    } else if (arg == "--architecture") {
      console.log("CPU architecture: ", architecture);
    } else {
      console.log(colors.invalid);
    }
  });
};
