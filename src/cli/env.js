const parseEnv = () => {
  const vars = process.env;

  const result = Object.entries(vars)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);

  console.log(result.join("; "));
};

parseEnv();
