const parseEnv = () => {
  process.env.RSS_arg1 = 'value1';
  process.env.RSS_arg2 = 'value2';
  for (let key in process.env) {
    if (/^RSS_/.test(key)) {
      console.log(`${key}=${process.env[key]};`);
    }
  }
};

parseEnv();
