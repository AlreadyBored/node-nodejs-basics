export const parseEnv = () => {
  let arr = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('RSS_')) {
      arr.push(`${key}=${value}`);
    };
  }
  console.log(arr.join('; '));
};

parseEnv();
