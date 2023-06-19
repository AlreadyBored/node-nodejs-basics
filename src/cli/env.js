const parseEnv = () => {
  const result = [];
  for (const variable in process.env) {
    if (variable.startsWith("RSS_")) {
      result.push(`${variable}=${process.env[variable]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
