import process from 'node:process';

const parseEnv = () => {
    // console.log('process.env = ', process.env);
    Object.keys(process.env).forEach(key => {
        if (key.startsWith('RSS_')) {
          console.log(`${key}=${process.env[key]};`);
        }
      });
};

parseEnv();