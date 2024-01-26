const parseArgs = () => {
    const args = process.argv.slice(2);
  
    const parsedArgs = args.reduce((acc, arg, index, array) => {
      if (arg.startsWith('--')) {
        const currentKey = arg.slice(2);
        acc[currentKey] = null;
      } else if (index > 0 && array[index - 1].startsWith('--')) {
        const currentKey = array[index - 1].slice(2);
        acc[currentKey] = arg;
      }
      return acc;
    }, {});
  
    for (const [key, value] of Object.entries(parsedArgs)) {
      if (value !== null) {
        console.log(`${key} is ${value}`);
      }
    }
  };
  
  parseArgs();