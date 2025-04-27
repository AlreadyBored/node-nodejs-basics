const parseArgs = () => {
  const argsArray = process.argv.slice(2); 

  const argsObj = {};

  for (let i = 0; i < argsArray.length; i += 2) {
    const propName = argsArray[i].replace("--", "");
    const value = argsArray[i + 1];
    argsObj[propName] = value;
  }

  const result = Object.entries(argsObj)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(result);
};

parseArgs();
