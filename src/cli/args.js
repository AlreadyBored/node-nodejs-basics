const parseArgs = () => {
  const result = [];
  process.argv.forEach((val, index) => {
    if (val.startsWith('--')) {
      const propName = val.slice(2);
      result.push(`${propName} is ${process.argv[index + 1]}`);
    }
  });

  console.log(result.join(', '));
};

parseArgs();