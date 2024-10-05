const parseArgs = () => {
  const args = process.argv.slice(2);
  const output = [];

  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith("--") && args[i + 1]) {
      const key = args[i].slice(2);
      const value = args[i + 1];
      output.push(`${key} is ${value}`);
    }
  }

  console.log(output.join(", "));
};

parseArgs();
