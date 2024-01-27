const parseEnv = () => {
  const env = process.env;
  const rssVar = Object.entries(env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(rssVar);
};

parseEnv();
