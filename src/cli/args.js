const parseArgs = () => {
  const args = process.argv.slice(2);

  const argOutput = {};

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace(/^--/, "");
    const propValue = args[i + 1];
    argOutput[propName] = propValue;
  }

  Object.entries(argOutput).forEach(([propName, propValue]) => {
    console.log(`${propName} is ${propValue}`);
  });
};

parseArgs();
