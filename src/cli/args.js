import { argv } from "process";

export const parseArgs = () => {
  argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
};

parseArgs();
