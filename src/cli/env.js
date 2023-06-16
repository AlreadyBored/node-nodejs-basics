const parseEnv = () => {
  // Write your code here
  let envVar = [];
  for (let key in process.env) {
    envVar.push([key, process.env[key]]);
  }

  const rsVar = envVar
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("; ");
  console.log(rsVar);
};
parseEnv();
