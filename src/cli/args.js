const parseArgs = () => {
  let start = false;
  const params = process.argv.reduce((acc, element, index, array) => {
    let result = '';
    if (!start && (element.endsWith('args') || element.endsWith('args.js'))) start = true;
    else if (start) {
      if (element.startsWith('--')) {
        result = `${acc ? ', ' : ''}${element.substring(2)} is ${array[index + 1] ?? ''}`;
      }
    }
    return acc + result;
  }, '');
  console.log(params);
};

parseArgs();