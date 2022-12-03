const parseEnv = () => {
  const allKeys = Object.keys(process.env);

  allKeys.forEach((key) => {
    if (key.startsWith("RSS_")) {
      console.log(process.env[key]);
    }
  });
};

parseEnv();
