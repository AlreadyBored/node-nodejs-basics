import { argv } from "node:process";

const parseArgs = () => {
  const argsParts = argv.slice(2, argv.length);
  const newArr = [];
  for (let i = 0; i < argsParts.length; i += 2) {
    newArr.push(argsParts[i].replace("--", "") + " is " + argsParts[i + 1]);
  }
  console.log(newArr.join(", "));
};

parseArgs();
