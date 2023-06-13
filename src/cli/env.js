const parseEnv = () => {
  const res = Object.keys(process.env).reduce((acc, key) => {
    if (key.startsWith('RSS_')) {
      acc += `${acc ? '; ' : ''}${key}=${process.env[key]}`;
    }
    return acc;
  }, '');
  console.log(res);
};

parseEnv();
