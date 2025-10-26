const parseEnv = () => {
  const env = process.env;
  const result = {};

  for (const key in env) {
    if (Object.hasOwn(env, key)) {
      result[key] = env[key];
    }
  }

  console.log(result);
  return result;
};

parseEnv();
