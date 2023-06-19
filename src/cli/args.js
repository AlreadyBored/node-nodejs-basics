const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsMap = new Map();

  for (let i = 0; i < args.length; i += 2) {
    const key= args[i].substring(2);
    const value = args[i + 1];
    argsMap.set(key, value);
  }

  for (const [key, value] of argsMap) {
    console.log(`${key} is ${value};`);
  }
};

parseArgs();
