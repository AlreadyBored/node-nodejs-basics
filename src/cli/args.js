const parseArgs = () => {
  const args = process.argv.reduce((acc, value, index, array) => {
    if (value.startsWith('--')) {
      const parsedArguments = `${value.slice(2)} is ${array[index + 1]}`;
      return [...acc, parsedArguments];
    }
    return acc;
  }, []);
  console.log(args.join(', '));
};

parseArgs();
