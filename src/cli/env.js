const PREFIX = 'RSS_';

const parseEnv = () => {
  const envVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith(PREFIX))
    .map(([key, value]) => `${key}=${value}`);

  console.log(envVars.join('; '));
};

parseEnv();
