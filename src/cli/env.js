const parseEnv = () => {
  const rssEnv = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith("RSS_")) rssEnv.push(`${key}=${value}`);
  });

  console.log(rssEnv.join("; "));
};

parseEnv();
