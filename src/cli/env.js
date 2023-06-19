const parseEnv = () => {
  const res = [];
  const vars = process.env;
  Object.entries(vars).forEach(([variable, val])=> {
    if (variable.startsWith('RSS_')) {
      res.push(`${variable}=${val}`)
    }
  });
  console.log(res.join('; '));
};

parseEnv();
