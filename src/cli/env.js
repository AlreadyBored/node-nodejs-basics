const PREFIX = "RSS_";

const parseEnv = () => {
  const env = Object.entries(process.env)
    .filter(([key]) => key.startsWith(PREFIX))
    .map((keyVal) => keyVal.join("="))
    .join("; ");

  console.log(env);
};

parseEnv();
