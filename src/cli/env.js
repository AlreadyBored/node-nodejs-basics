const parseEnv = () => {
  // Write your code here
  const envVars = process.env;
  const prefixToFind = "RSS_";
  let needVars = [];

  for (let key in envVars) {
    if (key.startsWith(prefixToFind)) {
      needVars.push(`${key}=${envVars[key]}`);
    }
  }

  console.log(needVars.join("; "));
};

parseEnv();
