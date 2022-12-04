import { argv } from "node:process";

const parseArgs = () => {
  const argSlice = argv.slice(2);
  const argList = [];
  for (let i = 0; i < argSlice.length - 2; i += 2) {
    argList.push(`${argSlice[i]} is ${argSlice[i + 1]}`);
  }
  console.log(argList.join(", "));
};

parseArgs();
