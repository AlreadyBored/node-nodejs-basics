const parseEnv = () => {
  const variables = Object.keys(process.env);
  const prefix = "NVM";
  variables.forEach((v) => {
    if (v.startsWith(prefix)) {
      console.log(`${v}=${process.env[v]};`);
    }
  });
};

parseEnv();
