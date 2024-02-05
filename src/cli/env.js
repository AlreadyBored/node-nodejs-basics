const parseEnv = () => {
  try {
    const allEnvVariables = process.env;
    const rssVariables = Object.entries(allEnvVariables)
      .filter(([key]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`);
    console.log(rssVariables.join('; '));
  } catch (error) {
    console.error(`Error parsing and printing environment variables: ${error.message}`);
    throw error;
  }
};

parseEnv();