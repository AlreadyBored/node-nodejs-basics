export const parseEnv = () => {
  const rssVarArray = Object.keys(process.env).filter((it) =>
    it.startsWith('RSS_')
  );
  rssVarArray.forEach((it) => {
    console.log(`${it}=${process.env[it]}`);
  });
};

parseEnv();
