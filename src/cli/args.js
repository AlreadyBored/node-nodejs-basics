const parseArgs = () => {
  const parsedArg = process.argv.slice(2);
  let result = [];
  for (let i = 0; i < parsedArg.length; i += 2) {
    const transformedName = parsedArg[i].replace("--", "");
    const value = parsedArg[i + 1];
    result.push(`${transformedName} is ${value}`);
  }
  console.log(result.join(", "));
};
parseArgs();
