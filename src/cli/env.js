const parseEnv = () => {
  const variables = []

  for (let key in process.env) {
    if (!key.indexOf("RSS_")) {
      variables.push(`${key}=${process.env[key]}`)
    }
  }

  console.log(variables.join("; "))
};

parseEnv();
