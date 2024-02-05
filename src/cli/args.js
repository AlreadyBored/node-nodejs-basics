const parseArgs = () => {
  // Write your code here
  let commands = process.argv.slice(2);
  let resultArray = [];
  for (let i = 0; i < commands.length; i += 2) {
    const resultName = commands[i].substring(2);
    const resultValue = commands[i + 1];
    resultArray.push(`${resultName} is ${resultValue}`);
  }
  resultArray.forEach((item) => console.log(item));
};

parseArgs();
