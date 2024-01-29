const parseEnv = () => {
  const rssEnvVariables = [];
  const pattern = "RSS_";
  Object.keys(process.env).forEach((key) => {
    if (key.includes(pattern)) {
      rssEnvVariables.push(`${key}=${process.env[key]}`);
    }
  });

  console.log(rssEnvVariables.join("; "));
};

parseEnv();
