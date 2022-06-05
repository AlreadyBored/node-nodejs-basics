export const parseEnv = () => {
  const rss_array = [];
  for (let i in process.env) {
    if (i.startsWith('RSS_')) {
      rss_array.push(`${i}=${process.env[i]}`);
    }
  }
  console.log(rss_array.join('; '));
};
parseEnv();
