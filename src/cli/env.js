const parseEnv = () => {
  const envs = process.env;
  const result = [];

  for (const [key, value] of Object.entries(envs)) {
    if (key.startsWith("RSS_")) {
      result.push(`${key}=${value};`);
    }
  }
  console.log(result.join(" "));
};

parseEnv();
