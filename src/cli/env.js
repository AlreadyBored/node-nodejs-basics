const parseEnv = () => {
  const filteredEnvs = Object.keys(process.env).filter(env => env.startsWith('RSS_')); //TERM
  const resultArr = [];
  filteredEnvs.map(env => {
    resultArr.push(`${env}=${process.env[env]}`);
  });
  console.log(resultArr.join('; '));
};

parseEnv();