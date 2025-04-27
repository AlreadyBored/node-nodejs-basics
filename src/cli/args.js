const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);

      if (i + 1 < args.length && !args[i + 1].startsWith("--")) {
        parsedArgs[key] = args[i + 1];
        i++;
      } else {
        parsedArgs[key] = "";
      }
    }
  }

  const output = Object.entries(parsedArgs)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(output);
};

parseArgs();
