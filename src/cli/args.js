const parseArgs = () => {
  const argumentsArray = process.argv.slice(2);
  let result = [];
  for (let i = 0; i < argumentsArray.length / 2; i++) {
    const argument = argumentsArray[i * 2].slice(2);
    const value = argumentsArray[i * 2 + 1];
    result.push(`${argument} is ${value}`);
  }
  console.log(result.join(", "));
};

parseArgs();
