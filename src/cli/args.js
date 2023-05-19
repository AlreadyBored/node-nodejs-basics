const parseArgs = () => {;
  // Write your code here
  const { argv } = process;
  for (let i = 2; i < argv.length; i += 2) {
    console.log(`\u001B[34m${argv[i]} is \u001B[35m${argv[i + 1]}\u001B[0m`);
  }
};

parseArgs();
