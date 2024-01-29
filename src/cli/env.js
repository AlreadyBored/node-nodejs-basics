const parseEnv = () => {
  const env = process.env;
  console.log("env: ", env);
  const prefix = "RSS_";
  //add prefix to env keys and log them
  const prefixedEnv = Object.keys(env).reduce((acc, key) => {
    acc[prefix + key] = env[key];
    return acc;
  }, {});

  console.log(prefixedEnv);
};

parseEnv();
