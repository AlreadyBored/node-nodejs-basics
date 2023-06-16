const parseArgs = () => {
  const parsedArgs = [];

  for (let i = 0; i < process.argv.length; i += 2) {
    if (i < 2) continue;
    const propName = process.argv[i].slice(2);
    const value = process.argv[i + 1];
    parsedArgs.push(`${propName} is ${value}`);
  }

  console.log(parsedArgs.join(", "));
};

parseArgs();
