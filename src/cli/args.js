const parseArgs = () => {
  const args = process.argv.slice(2);
  const keySign = "--";
  const parsedArgs = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith(keySign)) {
      const key = arg.replace(keySign, "");
      const value = args[i + 1];
      parsedArgs.push(`${key} is ${value}`);
    }
  }

  console.log(parsedArgs.join(", "));
};

parseArgs();

