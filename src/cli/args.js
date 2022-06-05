export const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsMap = {};
  for (let i = 0; i < args.length; i += 2) {
    let key = args[i];
    key = key.replace(/^--/, '');
    argsMap[key] = args[i + 1];
  }
  for (const [key, value] of Object.entries(argsMap)) {
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
