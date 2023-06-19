const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(result);
};

parseEnv();
