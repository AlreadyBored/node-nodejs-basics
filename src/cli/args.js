const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace("--", "");
    const value = args[i + 1];
    res.push(`${key} is ${value}`);
  }
  console.log(res.join(", "));
};

parseArgs();
