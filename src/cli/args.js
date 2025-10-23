const parseArgs = () => {
  const args = process.argv.slice(2);

  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[index + 1];
      if (value && !value.startsWith("--")) {
        console.log(`${key} is ${value}`);
      }
    }
  });
};

parseArgs();
