const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = {};

  for (let i = 0; i < args.length; i += 2) {
    const keys = args[i].replace("--", "");
    const value = args[i + 1];
    result[keys] = value;
  }

  const output = Object.entries(result)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(output);
};

parseArgs();
