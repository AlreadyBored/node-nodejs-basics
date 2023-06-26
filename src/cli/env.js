const parseEnv = () => {
  const vars = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map(key => `${key}=${process.env[key]}`);

  console.log(vars.join("; "));
};

parseEnv();
