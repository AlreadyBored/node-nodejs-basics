const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = [];

  for (let i = 0; i < args.length; i += 2) {
    result.push(`${args[i].replace('--', '')} is ${args[i + 1]}`);
  }

  console.log(result.join(', '));
};

parseArgs();
