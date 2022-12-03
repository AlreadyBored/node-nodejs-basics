const parseArgs = () => {
  const needData = process.argv.slice(2);
  const result = [];
  needData.forEach((item, index, array) => {
    if (index % 2 == 0) {
      result.push(`${item.slice(2)} is ${array[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
