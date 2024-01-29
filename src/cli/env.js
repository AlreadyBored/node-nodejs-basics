const parseEnv = () => {
  const envVars = []
  for (const key in process.env) {
    envVars.push(`RSS_${key}=${process.env[key]}`);
  }
  console.log(envVars.join('; '))
};

parseEnv();