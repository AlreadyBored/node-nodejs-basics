const parseEnv = () => {
  const filtered = Object.fromEntries(Object.entries(process.env).filter(([key]) => key.startsWith('RSS_')));
  console.log(Object.entries(filtered).join('; ').replaceAll(',', '='));
};

parseEnv();