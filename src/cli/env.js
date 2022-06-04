import { env } from 'node:process';

export const parseEnv = () => {
    const arrayOfVariables = [];
    for (let variable in env) {
      if (variable.startsWith('RSS_')) {
        arrayOfVariables.push(`${variable}=${env[variable]}`);
      }
    }
    const result = arrayOfVariables.join('; ').toString();
    console.log(result);
    return result;
};

parseEnv();