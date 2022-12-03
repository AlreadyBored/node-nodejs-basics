const parseEnv = () => {
  const result = Object.keys(process.env).filter((key) => key.startsWith("RSS_")).reduce((acc, key, idx, arr) =>  acc + `${key}=${process.env[key]}${idx < arr.length - 1 ? '; ' : ''}`, '');

  console.log(result);
};

parseEnv();
