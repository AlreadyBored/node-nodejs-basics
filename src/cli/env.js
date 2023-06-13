const parseEnv = () => {
  const rssEnv = Object.entries(process.env)
    .filter(([k]) => k.startsWith("RSS_"))
    .map(([k, v]) => `${k}=${v}`)
    .join("; ");
  console.log(rssEnv);
};

parseEnv();
