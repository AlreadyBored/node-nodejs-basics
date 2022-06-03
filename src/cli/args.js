import process from "process";

export const parseArgs = () => {
  // Write your code here

  const argument = [];

  for (let i = 2; i < process.argv.length; i += 2) {
    argument.push(`${process.argv[i]} is ${process.argv[i + 1]}`);
  }

  console.log(argument.join(", "));
};

parseArgs();
