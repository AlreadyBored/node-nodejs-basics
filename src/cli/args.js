import { argv } from "node:process";

const parseArgs = () => {
  const userArgs = argv.slice(2);
  for (let i = 0; i < userArgs.length; i = i + 2) {
    console.log(userArgs[i].replace("--", ""), "is", userArgs[i + 1]);
  }
};

parseArgs();
