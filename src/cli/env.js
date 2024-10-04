const parseEnv = () => {
  let result = [];
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      result.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
