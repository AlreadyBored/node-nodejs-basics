const parseEnv = () => {
 const allEnv = process.env;
 const res = [];

  for (const key in allEnv) {
    if (key.startsWith('RSS_')) {
        res.push(`${key}=${allEnv[key]}`); 
    }
  }

  console.log(res.join('; '));

};

parseEnv();