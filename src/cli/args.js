const parseArgs = () => {
  const properArray = process.argv.slice(2);
  const result = [];
  for (let i = 0; i < properArray.length; i += 2) {
    const key = properArray[i].replace(/^--/, "");
    const value = properArray[i + 1];
    result.push(`${key} is ${value}`);
  }
  console.log(result.join(","));
};

parseArgs();
