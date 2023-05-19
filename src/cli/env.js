const parseEnv = () => {
  const keys = Object.keys(process.env);
  keys.forEach((key) => {
    if (key.startsWith("RSS_")) {
      console.log(`${key}=${process.env[key]}`);
    }
  });
  // Write your code here
};

parseEnv();
