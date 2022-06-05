import dotenv from 'dotenv';

dotenv.config();

export const parseEnv = () => {
  const result = [];
  const RSS_ = 'RSS_';
    for (let key in process.env) {
      if (key.length >= 4 &&  key.slice(0, 4) === RSS_APP) {
        result.push(`${key}=${process.env[key]}`)
      }
    }

    console.log(result.join('; '));
};

parseEnv();
