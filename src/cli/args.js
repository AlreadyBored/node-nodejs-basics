const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  for (let i = 0; i < args.length; i++) {
    const token = args[i];
    if (token.startsWith('--')) {
      const name = token.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith('--')) {
        result.push(`${name} is ${value}`);
        i++; // skip value
      }
    }
  }
  if (result.length) console.log(result.join(', '));
};

parseArgs();
