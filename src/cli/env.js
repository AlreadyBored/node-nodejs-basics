const parseEnv = () => {
  const rssVariables = [];

  for (let variable of Object.entries(process.env)) {
    if (variable[0].includes('RSS_')) {
      rssVariables.push(`${variable[0]}=${variable[1]}`);
    }
  }
  console.log(rssVariables.join('; '));
};

parseEnv();
