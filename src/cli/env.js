const parseEnv = () => {
  const prefix = "RSS_";
  const envVariables = process.env;
  for (const variable in envVariables) {
    if (variable.startsWith(prefix)) {
      const value = envVariables[variable];
      console.log(`${variable}=${value}`);
    }
  }
};

parseEnv();
