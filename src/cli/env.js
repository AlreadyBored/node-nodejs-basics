export const parseEnv = () => {
  const requiredPrefix = 'RSS_';
  const parsedEnvs = process.argv.slice(2).filter(
    (env) => env.includes(requiredPrefix)
  );
  console.log(parsedEnvs.join('; '));
};

parseEnv();
