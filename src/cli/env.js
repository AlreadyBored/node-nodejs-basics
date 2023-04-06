const parseEnv = () => {
  const rssValue = [];

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith('RSS_')) {
      rssValue.push(`${key}=${value}`);
    }
  });
  console.log(rssValue.join('; '));
};

parseEnv();
