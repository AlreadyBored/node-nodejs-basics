const parseEnv = () => {
  const result = Object.keys(process.env)
    .filter((el) => el.startsWith("RSS_"))
    .map((el) => `${el}=${process.env[el]}`)
    .join("; ");

  console.log(result);
};

parseEnv();
