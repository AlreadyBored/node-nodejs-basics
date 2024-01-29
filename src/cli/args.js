const parseArgs = () => {
  const args = process.argv.slice(2);
  
  const result = args.reduce((acc, c, i, args) => {
    if (i % 2 !== 0) {
      acc.push(`${args[i-1].slice(2)} is ${c}`);
    }
    return acc;
  }, []);

  console.log(result.join(', '));
};

parseArgs();
