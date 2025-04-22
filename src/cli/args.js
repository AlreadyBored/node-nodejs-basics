const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);

  const resultList = [];

  for (let i = 0; i < args.length; i += 2) {
    resultList.push(`${args[i].slice(2)} is ${args[i + 1] ?? ""}`);
  }

  console.log(resultList.join(", "));
};

parseArgs();
