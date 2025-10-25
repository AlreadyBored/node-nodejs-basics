const parseEnv = () => {
  const parsedArr = Object.keys(process.env).reduce((acc, item) => {
    if(item.startsWith('RSS_')) {
      return [...acc, `${item}=${process.env[item]}`]
    }
    return acc;
  },[]).join('; ')

  console.log(parsedArr)
};

parseEnv();
