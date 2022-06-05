export const parseEnv = () => {
  const requiredPrefix = 'RSS_';
  const parsedEnvs = Object.entries(process.env).map(
    ([key, value]) => `${requiredPrefix}${key}=${value}`
  );

  console.log(parsedEnvs.join(';\n '));
};

parseEnv();
