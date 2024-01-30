const parseEnv = () => {
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${process.env[key]}`)
    }
  })
};

parseEnv();
