const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsString = args
    .map((arg, index) => {
      if (index % 2 === 0) {
        return `${arg} is`;
      }
      return arg;
    })
    .join(" ");
  console.log(argsString);
};

parseArgs();
