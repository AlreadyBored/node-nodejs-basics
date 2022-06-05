export const parseEnv = () => {
  const prefix = 'RSS_';

  for (const envKey in process.env) {
    console.log(`${prefix}${envKey}=${process.env[envKey]}`);
  }
};

parseEnv(process.env);
