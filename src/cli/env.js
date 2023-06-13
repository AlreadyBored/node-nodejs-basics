const parseEnv = (asd) => {
  const rssEnv = Object.entries(process.env)
    .filter(([k, v]) => k.startsWith("RSS_"))
    .map(([k, v]) => `${k}=${v}`)
    .join("; ");
  console.log(rssEnv);
};

parseEnv();
