import { env } from 'node:process';

export const parseEnv = () => {
  const result = Object.entries(env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(result);
};

parseEnv();
