const parseEnv = () => {
  Object.keys(process.env).map((elem) => console.log('RSS_' + elem + '=' + process.env[elem]));
};

parseEnv();