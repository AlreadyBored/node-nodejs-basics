const parseEnv = () => {
  const result = Object.keys(process.env).reduce((acc, key) => {
    if (key.includes("RSS_")) {
      acc += `${key}=${process.env[key]}; `;
    }
    return acc;
  }, "");

  console.log(result.trim());
};

parseEnv();
