const parseArgs = () => {
  const result = process.argv
    .reduce((acc, item, index, array) => {
      if (item.startsWith("--")) {
        return [
          ...acc,
          { name: item.replace("--", ""), value: array[index + 1] },
        ];
      }

      return acc;
    }, [])
    .map((item) => `${item.name} is ${item.value}`)
    .join(", ");

  console.log(result);
};

parseArgs();
