const parseEnv = () => {
  Object.entries(process.env).forEach(([name, value]) => {
    if (name.startsWith("RSS_")) {
      console.log(`${name}=${value}`);
    }
  });
};

parseEnv();
