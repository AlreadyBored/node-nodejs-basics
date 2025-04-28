const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = args.map((arg) => {
    if (arg.startsWith("--")) {
      const propName = arg.slice(2);
      const value = args[args.indexOf(arg) + 1];
      return `${propName} is ${value}`;
    }
    return null;
  });
  console.log(parsedArgs.filter(Boolean).join(", "));
};

parseArgs();
