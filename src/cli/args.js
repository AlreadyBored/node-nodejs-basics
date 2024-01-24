const parseArgs = () => {
  const argsArray = process.argv;

  let argsToPrint = "";

  for (let i = 2; i < argsArray.length; i++) {
    if (i % 2 == 0) {
      argsToPrint += argsArray[i] + " is " + argsArray[i + 1] + ", ";
    }
  }

  console.log(argsToPrint.slice(0, -2));
};

parseArgs();
