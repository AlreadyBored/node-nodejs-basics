const parseEnv = () => {
  const envVariables = process.env;
  let result = [];
    
  for (const [key, value] of Object.entries(envVariables)) {
    if (key.startsWith('RSS_')) {
      result.push(`${key}=${value}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();