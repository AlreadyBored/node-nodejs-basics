import { env } from 'process';

export const parseEnv = () => {
  const arr = [];
  for (const prop in env) {
    if (prop.startsWith('RSS_')) {
      arr.push(prop + '=' + env[prop]);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();