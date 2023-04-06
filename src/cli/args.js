const parseArgs = () => {
  const newArgsObject = [];

  process.argv.slice(2).forEach((val, index) => {
    if(index % 2 === 0) {
      newArgsObject.push(`${[...val.slice(2)].join('')} is ${process.argv.slice(2)[index + 1]}`);
    }
  });

  console.log(newArgsObject.join(', '));
};

parseArgs();
