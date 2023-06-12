const parseEnv = () => {
  const result = [];
  for (const envVar of Object.keys(process.env)) {
    if (envVar.startsWith("RSS_")) {
      result.push(`${envVar}=${process.env[envVar]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
