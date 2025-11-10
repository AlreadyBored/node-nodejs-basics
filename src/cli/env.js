const parseEnv = () => {
  const prefix = 'RSS_';
  const result = Object.keys(process.env)
    .filter((key) => key.startsWith(prefix))
    .map((key) => `${key}=${process.env[key]}`)
    .join('; ');
  if (result) console.log(result);
};

parseEnv();
