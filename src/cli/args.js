const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsLength = args.length;
  const arrArgs = [];

  for (let i = 0; i < argsLength; i += 2) arrArgs.push(`${args[i].slice(2)} is ${args[i + 1]}`);

  console.log(arrArgs.join(', '));
};

parseArgs();
