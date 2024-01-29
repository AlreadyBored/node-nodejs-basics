const parseEnv = () => {
  const envVariables = process.env;
  console.log(
    Object.keys(envVariables)
      .filter(key => key.startsWith('RSS_'))
      .map(key => `${key}=${envVariables[key]}; `)
      .join('')
  );
};

parseEnv();
