const parseArgs = () => {
  const variableFlag = "--";
  const outArgs = process.argv;

  const result = [];

  for (let i = 0; i < outArgs.length; i++) {
    const item = outArgs[i];
    if (item.startsWith(variableFlag)) {
      const str = `${item.replace(variableFlag, "")} is ${outArgs[i + 1]}`;
      result.push(str);
      i += 1;
    }
  }

  console.log(result.join(", "));
};

parseArgs();
