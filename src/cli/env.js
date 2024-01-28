const parseEnv = () => {
  const filteredObject = Object.entries(process.env).filter((el) =>
    el[0].includes("RSS_")
  );
  const variables = filteredObject.map(el => el.join("=")).join('; ');
  console.log(variables)
};

parseEnv();
