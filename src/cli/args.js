const parseArgs = () => {
  const args = process.argv;
  let resultString = '';

  args.forEach((arg, index) => {
    if (!arg.startsWith('--')) {
      return;
    }
    const key = arg.slice(2);
    const value = args[index + 1];
    resultString += `${key} is ${value}, `;
  });

  if (resultString.endsWith(', ')) {
    resultString = resultString.slice(0, -2);
  }

  console.log(resultString);
};

parseArgs();