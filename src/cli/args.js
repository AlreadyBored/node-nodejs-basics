const parseArgs = () => {
  const result = [];
  process.argv.forEach((val, index) => {
    if (val.startsWith("--")) {
      result.push(`${val.slice(2)} is ${process.argv[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
