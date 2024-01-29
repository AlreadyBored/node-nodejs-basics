const parseEnv = () => {
  const rssVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  if (rssVariables.length > 0) {
    console.log(rssVariables);
  } else {
    console.log('No RSS environment variables have found');
  }
};

parseEnv();
