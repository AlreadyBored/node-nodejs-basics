import { argv } from "node:process";

export const parseArgs = () => {
  argv.forEach((element, index) => {
    if (element.startsWith("--")) {
      console.log(`${element.substring(2)} is ${argv[index + 1]}`);
    }
  });
};

parseArgs();
// node cli/args.js --prop1name value1 --prop2name value2 
