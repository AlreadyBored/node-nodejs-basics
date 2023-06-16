const parseEnv = () => {
  const prefix = "RSS_";
  const envVariables = Object.entries(process.env);
  const parsedEnv = [];

  for (const [key, value] of envVariables) {
    if (key.startsWith(prefix)) {
      const parsedKey = key.slice(prefix.length);
      parsedEnv.push(`RSS_${parsedKey}=${value}`);
    }
  }
  console.log(parsedEnv.join("; "));
};

parseEnv();
