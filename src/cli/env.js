const parseEnv = () => {
  const environmentVars = process.env;

  const filteredVars = Object.keys(environmentVars)
    .filter((key) => key.startsWith('RSS_'))
    .map((key) => console.log(`${key}=${environmentVars[key]};`))

  if (filteredVars.length === 0) {
    console.log("No environment variables with prefix 'RSS_'");
  }
};

parseEnv();
