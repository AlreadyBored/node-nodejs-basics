const parseEnv = () => {
  const rssVariables = Object.entries(process.env).reduce(
    (acc, [key, value]) =>
      key.startsWith('RSS_') ? [...acc, `${key}=${value}`] : acc,
    []
  );

  const result = rssVariables.join('; ');
  console.log(result);
};

parseEnv();
