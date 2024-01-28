// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

const parseEnv = () => {
  const envVars = process.env;
  const filteredEnvVars = Object.keys(envVars)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${envVars[key]}`)
    .join("; ");

  console.log(filteredEnvVars);
};

parseEnv();
