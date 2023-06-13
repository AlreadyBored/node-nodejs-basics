const prefix = 'RSS_';

const parseEnv = () => {
  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
};

parseEnv();
