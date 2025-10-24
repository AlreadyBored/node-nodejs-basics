const parseEnv = () => {
  const envEntries = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);

  console.log(envEntries.join("\n"));
};

parseEnv();
