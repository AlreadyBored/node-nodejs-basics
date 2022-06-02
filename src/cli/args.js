import { argv } from "process";

export const parseArgs = () => {
  for (let index = 2; index < +argv.length - 1; index = index + 2) {
    console.log(`${argv[index]} is ${argv[+index + 1]}`);
  }
};

parseArgs();
