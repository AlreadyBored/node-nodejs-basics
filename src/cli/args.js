const parseArgs = () => {
  const envArgs = process.argv;

  envArgs.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      console.log(`${arg} is ${envArgs[index + 1]}`);
    }
  });
};

parseArgs();
