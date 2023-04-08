const parseArgs = () => {
  const resultArr = [];
  const argsAndValuesArr = process.argv.slice(2);

  for (let i = 0; i < argsAndValuesArr.length - 1; i = i + 2) {
    resultArr.push(`${argsAndValuesArr[i].slice(2)} is ${argsAndValuesArr[i + 1]}`);
  }
  console.log(resultArr.join(', '));
};

parseArgs();