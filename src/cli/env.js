const parseEnv = () => {
  const envVariables = process.env;

  const rssVariables = Object.keys(envVariables)
    .filter((key) => key.startsWith("RSS_"))
    .reduce((obj, key) => {
      obj[key] = envVariables[key];
      return obj;
    }, {});

  for (const [key, value] of Object.entries(rssVariables)) {
    console.log(`${key}=${value};`);
  }
};

parseEnv();
