const parseEnv = () => {
  const result = [];

  for (let variable in process.env) {
    if (variable.startsWith('RSS_')) {
      result.push(`${variable}=${process.env[variable]}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();