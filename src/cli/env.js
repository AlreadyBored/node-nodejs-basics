const parseEnv = () => {
  // Write your code here
  const rssNames = Object.keys(process.env).filter((e) => e.startsWith("RSS_"));
  console.log(rssNames.map((e) => `${e}=${process.env[e]};`).join(" "));
};

parseEnv();
