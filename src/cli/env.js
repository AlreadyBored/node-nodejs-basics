const parseEnv = () => {
  // Get all environment variables
  const allEnvVariables = process.env;
  let res = [];
  for (let field in allEnvVariables) {
    if (field.startsWith("RSS_")) {
      res.push(field + "=" + allEnvVariables[field]);
    }
  }
  console.log(res.join("; "));
};

parseEnv();