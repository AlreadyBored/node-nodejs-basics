const parseArgs = () => {
  const argsData = process.argv.slice(2);
  const res = [];

  for (let i = 0; i < argsData.length; i += 2) {
    const name = argsData[i].replace(/^--/, "");
    const value = argsData[i + 1];
    res.push(`${name} is ${value}`);
  }

  console.log(res.join(", "));
};

parseArgs();
