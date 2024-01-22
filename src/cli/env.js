const parseEnv = () => {
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      console.log(`RSS_${key.slice(4)}=${process.env[key]}`);
    }
  }
};

parseEnv();
