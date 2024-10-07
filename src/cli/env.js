const parseEnv = () => {
  const envVars = process.env;
  const rssVars = Object.keys(envVars)
    .filter(key => key.startsWith('RSS_'))
    .map(key => `${key}=${envVars[key]}`);
  console.log(rssVars.join('; '));
};

parseEnv();