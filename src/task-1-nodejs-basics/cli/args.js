const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = process.argv.slice(2).reduce((acc, arg, index) => {
    if (index % 2 === 0) {
      acc.push(`${arg} is ${args[index + 1]}`);
    }
    return acc;
  }, []).join(', ');
  console.log(result);
};

parseArgs();
