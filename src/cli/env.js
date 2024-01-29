const ENV_NAME="RSS_";
process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';

const parseEnv = () => {
    const rssVariables = Object.entries(process.env)
    .filter(([key, _]) => key.startsWith(ENV_NAME))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(rssVariables);
};

parseEnv();