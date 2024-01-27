const parseArgs = () => {
  const args = process.argv.slice(2);
  const formattedArgs = args.map((arg, index, array) => {
    if (arg.startsWith('--')) {
      const command = arg.slice(2);
      const value = array[index + 1];
      return `${command} is ${value}`;
    }
  });
  const stringArgs = formattedArgs.join(', ');
  console.log(stringArgs);
};

parseArgs();
