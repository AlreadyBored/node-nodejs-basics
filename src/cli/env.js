const parseEnv = () => {
  const env = process.env;

  const rssVars = Object.keys(env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${env[key]}`)
    .join("; ");

  console.log(rssVars);
};

parseEnv();
