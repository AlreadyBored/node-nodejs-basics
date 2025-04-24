const parseArgs = () => {
  const args = process.argv.slice(2);

  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2);
    const value = args[i + 1];

    parsedArgs[propName] = value;
  }

  const formattedOutput = Object.entries(parsedArgs)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(formattedOutput);
};

parseArgs();
