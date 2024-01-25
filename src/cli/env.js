const parseEnv = () => {
  const result = [];
  
  for (const [k, v] of Object.entries(process.env)) {
    if (k.startsWith('RSS_')) {
      result.push(`${k}=${v}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();
