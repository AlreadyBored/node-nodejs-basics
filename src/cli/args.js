const SEARCH_VALUE = '--';

const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = [];

  args.forEach((arg, index) => {
    if (index % 2 === 0) {
      const propName = arg.replace(SEARCH_VALUE, '');
      const value = args[index + 1];

      result.push(`${propName} is ${value}`);
    }
  });

  console.log(result.join(', '));
};

parseArgs();
