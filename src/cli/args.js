const parseArgs = () => {
  const rssLineArgumentsIndexes = [];
  const pattern = "--";
  Array.from(process.argv).forEach((value, index) => {
    if (value.includes(pattern)) {
      rssLineArgumentsIndexes.push(
        `${value.substring(2)} is ${process.argv[index + 1]}`
      );
    }
  });
  console.log(rssLineArgumentsIndexes.join(", "));
};

parseArgs();
