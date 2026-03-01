const parseEnv = () => {
  const envVars = process.env;

  const result = Object.entries(envVars)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(result);
};

parseEnv();
