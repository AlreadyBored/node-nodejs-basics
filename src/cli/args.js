import { argv } from "node:process";

const parseArgs = () => {
  // Write your code here
  const justArguments = argv.slice(2);
  const result = [];
  for (let i = 0; i < justArguments.length; i += 2) {
    result.push(`${justArguments[i].slice(2)} is ${justArguments[i + 1]}`);
  }
  console.log(result.join(", "));
};

parseArgs();
