const parseEnv = () => {
  const parsedRSSVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(parsedRSSVars);
};

await parseEnv();
