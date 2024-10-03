const parseArgs = () => {
  process.argv.forEach((arg, index, array) => {
    if (arg.startsWith("--") && !array[index + 1].startsWith("--")) {
      console.log(`${arg} is ${array[index + 1]}`);
    }
  });
};

parseArgs();
