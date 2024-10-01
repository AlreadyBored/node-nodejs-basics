const parseArgs = () => {
  const args = process.argv.slice(2); // Skip the first two elements (node and script path)
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace(/^--/, "");
    const value = args[i + 1];
    result.push(`${propName} is ${value}`);
  }

  console.log(result.join(", "));
};

parseArgs();
