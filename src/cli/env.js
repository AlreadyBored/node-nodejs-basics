const parseEnv = () => {
  const RSS = /^RSS_/i;

  const rssEnv = Object.keys(process.env)
    .filter((key) => RSS.test(key))
    .reduce((env, key) => {
      env += key + "=" + process.env[key] + "; ";
      return env;
    }, "");

  console.log(rssEnv.slice(0, -2));
};

parseEnv();
