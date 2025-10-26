const parseEnv = () => {
  const envVariables = process.env;
  const RSSVariables = Object.keys(envVariables).filter((variable) =>
    variable.includes("RSS_")
  );

  console.log(
    RSSVariables.map(
      (variable) => `${variable}=${envVariables[variable]}`
    ).join("; ")
  );
};

parseEnv();
