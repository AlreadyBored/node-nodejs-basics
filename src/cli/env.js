const parseEnv = () => {
  const envObj = process.env;
  for (const key in envObj) {
    if (key.includes(`RSS_`)) console.log(`${key} = ${envObj[key]}`);
  }
};

parseEnv();
