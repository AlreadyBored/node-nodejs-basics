export const parseEnv = () => {
   const rssVariables = Object.entries(process.env).filter((el) => el[0].slice(0, 4) === 'RSS_');
   rssVariables.forEach((el) => console.log(`${el[0]}=${el[1]}`));
};

parseEnv();