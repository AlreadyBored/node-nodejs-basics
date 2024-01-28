const parseEnv = () => {
  const envArr = Object.keys(process.env);
  let envs = envArr.filter((env) => env.startsWith("RSS_"));
  let resultString = "";
  if (envs.length > 0) {
    resultString += envs[0] + "=" + process.env[envs[0]];
  }
  for (let i=1; i< envs.length; i++) {
    resultString += `; ${envs[i]}=${process.env[envs[i]]}`;
  }
  console.log(resultString);
};

parseEnv();