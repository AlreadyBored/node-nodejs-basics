const parseEnv = () => {
  const env = process.env;
  const rss = Object.entries(env)
  .filter(([key]) => key.startsWith('RSS_'))
  .map(([key, value]) => `${key}=${value}`)
  console.log(rss.join('; '))
};
parseEnv()