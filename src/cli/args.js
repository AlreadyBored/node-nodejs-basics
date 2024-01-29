const parseArgs = () => {
  const args = process.argv.slice(2);
  const formattedArgs = args.reduce((result, arg, index, array) => {
    if (arg.startsWith('--')) {
      const propName = arg.slice(2);
      const propValue = array[index + 1];
      result.push(`${propName} is ${propValue}`);
    }
    return result;
  }, []);
  console.log(formattedArgs.join(', '));
};

parseArgs();