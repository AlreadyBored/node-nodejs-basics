const parseArgs = () => {
  const args = process.argv.slice(2);

  const { arr } = args.reduce(
    (accumulator, current, index) => {
      const isKey = index % 2 === 0;
      const clearKey = current.substring(2);

      if (!isKey) {
        accumulator.arr.push(`${accumulator.key} is ${current}`);
      }

      return { ...accumulator, key: isKey ? clearKey : "" };
    },
    { arr: [], key: "" }
  );

  console.log(arr.join(", "));
};

parseArgs();
