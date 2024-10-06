const parseArgs = () => {
  const variables = Object.keys(process.env);
  variables.forEach((v) => {
    console.log(`${v} is ${process.env[v]},`);
  });
};

parseArgs();
