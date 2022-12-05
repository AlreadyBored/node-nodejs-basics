const parseArgs = () => {
  const argsObjects = [];

  process.argv.slice(2).forEach((item, index) => {
    if (index % 2 === 0) {
      argsObjects.push(
        `${[...item.slice(2)].join('')} is ${process.argv.slice(2)[index + 1]}`
      );
    }
  });

  console.log(argsObjects.join(', '));
};

parseArgs();
