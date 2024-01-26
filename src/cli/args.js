const parseArgs = () => {
  const outputArray = [];

  for (let index = 2; index < process.argv.length; index += 2) {
    const key = process.argv[index].slice(2);
    const value = process.argv[index + 1];

    outputArray.push(`${key} is ${value}`);
  }

  const outputSeparator = ', ';
  console.log(outputArray.join(outputSeparator))
};

parseArgs();
