const parseEnv = () => {

  const env = process.env;

  const rssVars = Object.entries(env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`);

  console.log(rssVars.join('; '));
};

parseEnv();
