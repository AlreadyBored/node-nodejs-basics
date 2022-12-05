const parseEnv = (variables) => {
  for (let key in variables) {
    if (key.toString().startsWith("RSS_")) {
      console.log(`${key}=${variables[key]}`);
    }
  }
};

parseEnv(process.env);
