const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith("RSS_"))
    .map((pair) => pair.join("="))
    .join("; ");

  console.log(result);
};

parseEnv();
