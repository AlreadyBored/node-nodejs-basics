const parseEnv = () => {
  const env = Object.entries(process.env);

  const filteredEnv = env.filter((obj) => obj[0].startsWith('RSS_'));

  const result = filteredEnv.map(([key, value]) => `${key}=${value}`);
  console.log('Result:', result.join('; '));
};

parseEnv();
