const parseArgs = () => {
  // Write your code here
  const [_execPath, _jsFile, ...args] = process.argv;

  const { result: parsedArgv } = args.reduce(
    (acc, currentElement) => {
      const { key, result } = acc;
      const isKey = key === undefined;

      if (isKey) {
        result[currentElement] = [];

        return {
          key: currentElement,
          result,
        };
      } else {
        result[key] = [...result[key], currentElement];

        return {
          key: undefined,
          result,
        };
      }
    },
    {
      key: undefined,
      result: {},
    }
  );

  const result = Object.entries(parsedArgv)
    .map(([key, values]) => `${key} is ${values.join(",")}`)
    .join(", ");

  return result;
};

parseArgs();
