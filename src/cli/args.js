const parseArgs = () => {
  const result = [];
  for (let i = 0; i < process.argv.length; ++i) {
    if (process.argv[i].startsWith("--")) {
      result.push(`${process.argv[i]} is ${process.argv[i + 1]}`);
    }
  }
  console.log(result.join(", "));
};

parseArgs();
