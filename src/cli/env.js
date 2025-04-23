const parseEnv = () => {
  const rssEnvs = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
  console.log(rssEnvs.map(([key, value]) => `${key}=${value}`).join('; '));
};

parseEnv();
