const parseEnv = () => {
  /* For test function 
  process.env.RSS_cource = "node.js";
  process.env.RSS_year = "2022"; */

  const rssValues = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith("RSS_")) {
      acc.push(`${key}=${value}`);
    }

    return acc;
  }, []);
  console.log(rssValues.join("; "));
};

parseEnv();
