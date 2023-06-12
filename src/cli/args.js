const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  args.forEach((arg, ind) => {
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[ind + 1] ?? "";
      result.push(`${key} is ${value}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
