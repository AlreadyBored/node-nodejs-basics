const parseArgs = () => {
  const args = process.argv.slice(2);

  const res  = args.reduce((acc, curr, index, array) => {
    if (index % 2 !== 1) {
      const propName = curr.slice(2);
      const value = array[index + 1];

      acc.push(`${propName} is ${value}`);
    }

    return acc;
  }, []);

  console.log(res.join(', '));
};

parseArgs();