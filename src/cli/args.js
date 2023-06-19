const parseArgs = () => {
    
    const args = {};

    for (let i = 2; i < process.argv.length; i += 2) {
      const propName = process.argv[i].slice(2);
      const propValue = process.argv[i + 1];
      args[propName] = propValue;
    }
  
    const formattedArgs = Object.entries(args)
      .map(([propName, propValue]) => `${propName} is ${propValue}`)
      .join(', ');
  
    console.log(formattedArgs);
};

parseArgs();