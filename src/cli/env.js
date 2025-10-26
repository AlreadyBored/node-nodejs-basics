const parseEnv = () => {
  // Write your code here
  const envVariables = Object.entries(process.env);
  const filteredVariables = envVariables.filter(([key]) =>
    key.startsWith("RSS_"),
  );
  const stringifyFilteredVariables = filteredVariables.map(
    ([key, value]) => `${key}=${value}`,
  );
  const jointResult = stringifyFilteredVariables.join("; ");
  console.log(jointResult);
};

parseEnv();
