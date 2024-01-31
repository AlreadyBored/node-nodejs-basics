const parseEnv = () => {
    // Write your code here 
    const envVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(envVariables);
};

parseEnv();