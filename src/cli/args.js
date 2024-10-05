const parseArgs = () => {
  const parsedArgs = process.argv.slice(2);
  const result = [];
  for (let i = 0; i < parsedArgs.length; i += 2) {
    const propName = parsedArgs[i].replace("--", "");
    result.push(propName + " is " + parsedArgs[i + 1]);
  }
  console.log(result.join(", "));
};

parseArgs();
