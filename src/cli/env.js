export const parseEnv = () => {
  const filteredKeys = Object.keys(process.env).filter((key) => key.startsWith('RSS_'));
  const filteredEnv = filteredKeys.map((element) => `${element}=${process.env[element]}`.trim());
  console.log(filteredEnv.join('; '));
};

parseEnv();
