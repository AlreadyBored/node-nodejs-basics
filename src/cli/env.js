const parseEnv = () => {
  const objEnv = process.env
  const arr = []
  for (const [key, value] of Object.entries(objEnv)) {
    if (key.startsWith('RSS_')){
      arr.push(`${key}=${value}`)
    }
  }
  console.log(arr.join('; '))
};

parseEnv();
