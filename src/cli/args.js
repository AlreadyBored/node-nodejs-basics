const parseArgs = (args) => {
  const [executer, file, ...rest] = args;

  rest.forEach((value, index, array) => {
    if (value.startsWith("--")) {
      if (index === 0) {
        console.log(`propName is ${value}`);
      } else if (value.startsWith("--")) {
        console.log(`prop${index}Name is ${value}`);
      }
    }
  });
};

parseArgs(process.argv);
