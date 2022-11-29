import { argv } from "node:process";

const parseArgs = () => {
  argv.forEach((arg, index) => {
    if (/^--/.test(arg)) {
      console.log(`${arg} is ${argv[index + 1]}`);
    }
  });
};

parseArgs();
