const parseEnv = () => {
  // Write your code here
  const prefix = "RSS_";
  const list = Object.keys(process.env).filter((item) =>
    item.startsWith(prefix)
  );
  const text = list.reduce((acc, cur) => {
    return !!acc
      ? acc + "; " + `${cur}=${process.env[cur]}`
      : acc + `${cur}=${process.env[cur]}`;
  }, "");
  console.log(text);
};

parseEnv();
