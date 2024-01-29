const parseEnv = () => {
  // Write your code here
  const pairs = Object.entries(process.env);
  const resArr = [];

  pairs.forEach(([key, value]) => {
    if (key.startsWith("RSS_")) {
      resArr.push(`${key}=${value}`);
    }
  });
  console.log(resArr.join("; "));
};

parseEnv();
