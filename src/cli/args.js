const parseArgs = () => {
  const arrOfArgsSrc = process.argv.slice(2);
  const arrOfArgsRes = arrOfArgsSrc
    .reduce((acc, el, index) => {
      if (index % 2 === 0) {
        return [
          ...acc,
          `${el.replace("--", "")} is ${arrOfArgsSrc[index + 1]}`,
        ];
      }
      return acc;
    }, [])
    .join(", ");
  console.log(arrOfArgsRes);
};

parseArgs();