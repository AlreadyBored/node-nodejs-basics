const parseEnv = () => {
  // Write your code here
  const findRSS = Object.entries(process.env).reduce((acc, [key, val]) => {
    if (key.startsWith("RSS_")) acc.push(`${key}=${val}`);
    return acc;
  }, []);
  console.log(findRSS.join("; "));
};

parseEnv();
