const parseArgs = () => {
  const procArguments = process.argv;
  const result = [];

  for (let i = 0; i < procArguments.length - 1; i++)
    if (procArguments[i].startsWith('--')) {
      result.push(
        `${procArguments[i].substring(2)} is ${procArguments[i + 1]}`
      );
    }
  console.log(result.join(', '));
};

parseArgs();
