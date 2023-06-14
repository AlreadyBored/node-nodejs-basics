const parseEnv = () => {
  const processEnv = process.env;
  let result = [];
  for (let key in processEnv) {
    if (key.includes("RSS_")) {
      result.push(`${key}=${processEnv[key]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
