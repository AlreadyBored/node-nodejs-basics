const parseEnv = () => {
  const envs = Object.entries(process.env)
    .reduce((result, [key, value]) => (key.startsWith('RSS_') ? [...result, `${key}=${value}`] : result), [])
    .join('; ');

  console.log(envs);
};

parseEnv();
