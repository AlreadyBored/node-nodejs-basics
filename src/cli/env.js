const parseEnv = () => {
  const envVars = process.env;

  const RSS_PREFIX = "RSS_";
  const rssVars = Object.entries(envVars)
    .filter(([key]) => key.startsWith(RSS_PREFIX))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(rssVars);
};

parseEnv();
