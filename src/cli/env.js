const parseEnv = () => {
  const environmentVariables = process.env;
  const prefix = "RSS_";

  const parsedRssVariables = Object.keys(environmentVariables)
    .filter((key) => key.startsWith(prefix))
    .map((key) => `${key}=${environmentVariables[key]}`)
    .join("; ");

  console.log(parsedRssVariables);
};

parseEnv();
