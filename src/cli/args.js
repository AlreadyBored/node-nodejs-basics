const parseArgs = () => {
  const argList = process.argv;

  argList.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      console.log(`${arg.replace("--", "")} is ${argList[index + 1]}`);
    }
  });
};

parseArgs();
