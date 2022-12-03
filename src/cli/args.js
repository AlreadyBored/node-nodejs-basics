const parseArgs = () => {
  const [, , ...args] = process.argv;

  for (let i = 0; i < args.length - 1; i += 2) {
    const name = args[i].slice(2);
    const value = args[i + 1];
    console.log(`${name} is ${value}`);
  }
};

parseArgs();
