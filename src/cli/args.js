const parseArgs = () => {
  const arg = process.argv.slice(2);

  for (let i = 0; i < arg.length; i += 2) {
    if (arg[i].startsWith('--')) {
      console.log(`${arg[i].slice(2)} is ${arg[i + 1]}`);
    }
  }
};
 
parseArgs();