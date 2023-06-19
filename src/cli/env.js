const parseEnv = () => {
  const prefix = "RSS_";
  const reg = new RegExp(`^${prefix}`);
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith(prefix)) {
      const formattedKey = key.replace(reg, "");
      console.log(`RSS_${formattedKey}=${value};`);
    }
  }
};

parseEnv();
