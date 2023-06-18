const parseEnv = () => {
  const RSSlist = [];

  Object.keys(process.env).forEach((envVariable) => {
    if (envVariable.startsWith("RSS_")) {
      RSSlist.push(envVariable);
    }
  });

  RSSlist.forEach((rssName) => {
    console.log(`${rssName}=${process.env[rssName]};`);
  });

  if (RSSlist.length === 0) {
    console.log("You don't have process.env variables with prefix RSS_");
  }
};

parseEnv();
