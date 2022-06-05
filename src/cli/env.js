export const parseEnv = () => {
  // Write your code here
  const envVars = process.env;
  for (const varName in envVars) {
    if (varName.match(/^(?:RSS_).+/g)) {
      console.log(varName + "=" + envVars[varName]);
    }
  }
};

parseEnv();
