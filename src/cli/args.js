const parseArgs = () => {
  const arguments = process.argv;
  for (let i = 0; i < arguments.length; i += 2) {
    console.log(`${arguments[i]} is ${arguments[i + 1]}`);
  }
};

parseArgs();
