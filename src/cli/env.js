const parseEnv = () => {
  const rssVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);
  console.log(rssVars.join("; "));
};

parseEnv();
