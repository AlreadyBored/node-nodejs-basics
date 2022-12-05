const parseEnv = () => {
    const res = Object.keys(process.env)
      .filter(key => key.indexOf('RSS_') === 0)
      .map(key => `${key}=${process.env[key]}`)
      .join('; ')

    console.log(res)
};

parseEnv();