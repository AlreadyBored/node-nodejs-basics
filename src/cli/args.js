const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((acc, val, i) => {
    if (i % 2 === 0) {
      const propName = val.slice(2);
      const value = args[i + 1];
      acc.push(`${propName} is ${value}`);
    }
    return acc;
  }, []);
  console.log(result.join(", "));
};

parseArgs();
