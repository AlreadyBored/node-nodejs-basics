const parseArgs = () => {
  const args = process.argv.slice(2);

  const normalizedArgs = [];

  for (let i = 0; i < args.length; i += 2) {
    normalizedArgs.push(`${args[i].replace("--", '')} is ${args[i + 1]}`);
  }

  console.log(normalizedArgs.join(", "));
};

parseArgs();
