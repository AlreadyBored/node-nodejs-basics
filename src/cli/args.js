const parseArgs = () => {
  const argsArr = process.argv.slice(2);

  const resultObj = {};
  for (let i = 0; i < argsArr.length - 1; i++) {
    const arg = argsArr[i];
    const argWithoutPrefix = arg.slice(2);

    const nextArg = argsArr?.[i + 1] || null;

    if (!arg.startsWith("--")) continue;

    if (nextArg.startsWith("--")) {
      continue;
    }

    resultObj[argWithoutPrefix] = nextArg;
  }

  const resultArr = [];
  for (let [key, value] of Object.entries(resultObj)) {
    resultArr.push(`${key} is ${value}`);
  }

  const resultString = resultArr.join(", ");

  console.log(resultString);
};

parseArgs();
