const parseArgs = () => {
  // Write your code here
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) console.log(`${argv[i]} is ${argv[i + 1]}`);
  }
};

parseArgs();
