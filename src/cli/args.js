const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    result.push(`${args[i]} is ${args[i + 1]}`);
  }

  console.log(result);
};

parseArgs();
