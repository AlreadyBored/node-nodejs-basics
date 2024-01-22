const parseEnv = () => {
  const rssArrKeys = Object.keys(process.env).filter((key) => key.includes('RSS_'));
  const stringArr = [];
  for (let i = 0; i < rssArrKeys.length; i++)
    stringArr.push(`${rssArrKeys[i]}=${process.env[rssArrKeys[i]]}`);
    console.log(stringArr.join('; '))
};

parseEnv();
