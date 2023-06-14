const parseArgs = () => {
  for (let i = 2; i < process.argv.length; i += 2) {
    const name = process.argv[i].substring(2);
    const value = process.argv[i + 1];
    console.log(`${name} is ${value}`);
  }
};
parseArgs();
