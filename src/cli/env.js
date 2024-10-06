const prefix = 'RSS_';

const parseEnv = () => {
  let rssVariables = [];

    Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .forEach(([key, value]) => rssVariables.push(`${key}=${value}`));

  console.log(rssVariables.join('; '));
};

parseEnv();