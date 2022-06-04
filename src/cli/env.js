export const parseEnv = () => {
  const requiredPrefix = 'RSS_';
  const parsedEnvs = process.argv.slice(2).map(
    (env) => `${requiredPrefix}${env}`
  );
  console.log(parsedEnvs.join('; '));
};

parseEnv();
