const parseEnv = () => {
  let res = [];
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      res.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(res.join("; "));
};

parseEnv();