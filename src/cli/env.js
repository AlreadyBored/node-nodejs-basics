const parseEnv = () => {
  const envArr = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, val]) => `${key}=${val}`)
    .join("; ");

  console.log(envArr);
};

parseEnv();
