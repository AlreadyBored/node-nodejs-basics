const parseArgs = () => {
  const parsedArgumentArray = [];
  const argumentEntries = process.argv.entries();

  for (const [index, argument] of argumentEntries) {
    if (argument.startsWith("--")) {
      const name = argument.substring(2);
      const value = process.argv[index + 1];
      const properName = `${name} is ${value}`;

      parsedArgumentArray.push(properName);
    }
  }

  console.log(parsedArgumentArray.join(", "));
};

parseArgs();
