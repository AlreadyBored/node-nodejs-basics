const parseArgs = () => {
  for (let i = 2; i < process.argv.length; i += 2) {
    console.log(`${process.argv[i]} is ${process.argv[i + 1]}`);
  }
};

parseArgs();
