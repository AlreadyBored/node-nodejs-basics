const parseArgs = () => {
  const array = process.argv.slice(2);

  let value = array.reduce(function (accumulator, item, index, array) {
    if (index % 2 === 0) {
      accumulator.push(`${item.slice(2)} is ${array[index + 1]}`);
    }
    return accumulator;
  }, []);
  const joinedStr = value.join(", ");
  console.log(joinedStr);
};

parseArgs();
