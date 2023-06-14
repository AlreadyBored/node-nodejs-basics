const parseEnv = () => {
  const variables = Object.entries(process.env).filter(([key]) =>
    key.startsWith('RSS_')
  );

  for (const [key, value] of variables) {
    console.log(`${key}=${value};`);
  }
};
parseEnv();
