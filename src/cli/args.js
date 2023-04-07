const parseArgs = () => {
  const args = process.argv;
  //   iterate through args array and log to the console
  for (let i = 2; i < args.length; i += 2) {
    console.log(`${args[i]} is ${args[i + 1]}`);
  }
};

parseArgs();
