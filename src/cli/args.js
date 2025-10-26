const parseArgs = () => {
  const args = process.argv.slice(2, process.argv.length);

  args.forEach((arg, index) => {
    if (arg.startsWith("--"))
      console.log(`${args[index]} is ${args[index + 1]}`);
  });
};

parseArgs();
