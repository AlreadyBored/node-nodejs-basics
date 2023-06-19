const PREFIX = "--";

const parseArgs = () => {
  const args = process.argv.reduce((acc, value, index, array) => {
    if (value.startsWith(PREFIX)) {
      const formattedProp = `${value.replace(PREFIX, "")} is ${
        array[index + 1]
      }`;
      return [...acc, formattedProp];
    }
    return acc;
  }, []);
  const stringArgs = args.join(", ");
  console.log(stringArgs);
};

parseArgs();
