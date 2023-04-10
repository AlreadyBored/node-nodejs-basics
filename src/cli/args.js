import process from "process";

const parseArgs = () => {
  // Write your code here
  const args = process.argv;

  const parsedArgs = {};

  for (let i = 2; i < args.length; i += 2) {
    const propName = args[i].substring(2);
    ``;
    const propValue = args[i + 1];

    parsedArgs[propName] = propValue;
  }

  const formattedArgs = Object.entries(parsedArgs)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(formattedArgs);
};

parseArgs();
