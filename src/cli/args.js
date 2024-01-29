const parseArgs = () => {
  const incomingArgs = process.argv.slice(2);
  const incomingArgsPairs = incomingArgs.reduce((array, currentArg, index) => {
    if (index % 2 === 0) {
      array.push(`${currentArg.slice(2)} is ${incomingArgs[index + 1]}`);
    }

    return array;
  }, []);
  console.log(incomingArgsPairs.join(", "));
};

parseArgs();
