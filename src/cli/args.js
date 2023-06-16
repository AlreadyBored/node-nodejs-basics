const parseArgs = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("No command-line arguments provided.");
    return;
  }
  const parsedArguments = {};
  for (let i = 0; i < args.length; i += 2) {
    const propertyName = args[i].slice(2);
    const propertyValue = args[i + 1];
    parsedArguments[propertyName] = propertyValue;
  }
  for (const propertyName in parsedArguments) {
    const propertyValue = parsedArguments[propertyName];
    console.log(`${propertyName} is ${propertyValue}`);
  }
};

parseArgs();
