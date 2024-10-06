const ENV_PREFIX = "RSS_";

const parseEnv = () => {
  const envList = process.env;

  for (let key in envList) {
    if (key.includes(ENV_PREFIX)) console.log(`${key}=${envList[key]}`);
  }
};

parseEnv();
