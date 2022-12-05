const parseArgs = () => {
  const [_, currentPath, ...args] = process.argv;
  const result = args.reduce((acc, item, index) => {
    if (index % 2) {
      return acc;
    } else {
      acc.push(`${item} is ${args[index + 1]}`);
      return acc;
    }
  }, []);

  console.log(result.join(", "));
};

parseArgs();
