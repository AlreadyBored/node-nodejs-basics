const envSuffix='RSS_'
const parseEnv = () => {
   console.log(Object.entries(process.env)
    .filter(([key, value])=>key.startsWith(envSuffix))
    .map(([key,value])=>`${key}=${value}`).join('; '));
};

parseEnv();