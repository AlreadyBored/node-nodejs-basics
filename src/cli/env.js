const parseEnv = () => {
  // Get all environment variables
  const allEnvVars = process.env;
  
  // Filter variables that start with RSS_ prefix
  const rssVars = Object.entries(allEnvVars)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
  
  // Print the filtered variables in the required format
  console.log(rssVars);
};
  
parseEnv();
  