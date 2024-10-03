const parseEnv = () => {
  const envVariables = process.env;

  //   console.log(process.env.SOME);
  //   const test = Object.entries(envVariables);
  //   console.log(test);

  const filtrVariables = Object.entries(envVariables)
    .filter(([key, value]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(filtrVariables);
};

parseEnv();
