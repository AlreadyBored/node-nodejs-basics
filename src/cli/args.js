const handleArgs = (acc, arg, index, arr) =>
  arg.substring(0, 2) === "--"
    ? [
        ...acc,
        `${arg.slice(2)} is ${
          arr[index + 1].substring(0, 2) !== "__" ? arr[index + 1] : "no"
        }`,
      ]
    : acc;

const parseArgs = () => {
  const args = process.argv.slice(2);
  const handledArgs = args.reduce(handleArgs, []).join(", ");

  console.log(handledArgs);
};

parseArgs();
