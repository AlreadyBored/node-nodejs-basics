const parseEnv = () => {
  const envVars = Object.entries(process.env);

  envVars.forEach(([key, value]) => {
    if (key.startsWith("RSS")) {
      console.log(`${key}=${value}`);
    }
  });
};

parseEnv();
