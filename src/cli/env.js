const parseEnv = () => {
  const variables = Object.keys(process.env).filter((item) => item.startsWith("RSS_"));

  const parsedVariables = variables.map((item) => 
    `${item}=${process.env[item]}`).join("; ");

  console.log(parsedVariables);

};

parseEnv();