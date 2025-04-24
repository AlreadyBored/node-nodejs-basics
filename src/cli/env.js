const parseEnv = () => {
  const envVarsObject = process?.env || {};
  const allEnvKeys = Object.keys(envVarsObject);
  const rssPrefixKeysList = allEnvKeys.filter((key) => key.startsWith("RSS_"));

  const resultArr = [];
  for (const [key, value] of Object.entries(envVarsObject)) {
    if (!rssPrefixKeysList.includes(key)) continue;

    resultArr.push(`${key}=${value}`);
  }

  const resultStr = resultArr.join("; ");

  console.log(resultStr);
};

parseEnv();
