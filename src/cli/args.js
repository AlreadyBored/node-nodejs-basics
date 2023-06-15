const parseArgs = () => {
    const args = process.argv.slice(2);

  if (args.length % 2 !== 0) {
    throw new Error('Arguments should be provided in pairs');
  }

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace('--', '');
    const propValue = args[i + 1];
    console.log(`${propName} is ${propValue}`);
  }
};

parseArgs();