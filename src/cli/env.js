const parseEnv = () => {
  const env = process.env;

  const filteredEnv = Object.entries(env).filter(([key]) =>
    key.startsWith("RSS_")
  );
  const printedOutPut = filteredEnv
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(printedOutPut);
};

parseEnv();
