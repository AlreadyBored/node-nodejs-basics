const parseEnv = () => {
  // Write your code here
  const filteredKeys = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${process.env[key]}`);

  filteredKeys.forEach((item) => console.log(item, "item"));
};

parseEnv();
