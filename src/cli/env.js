const parseEnv = () => {
  const prefix = "RSS_";
  const entries = Object.entries(process.env)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => `${k}=${v}`);
  if (entries.length === 0) {
    console.log("");
    return;
  }
  console.log(entries.join("; "));
};

parseEnv();
