const parseEnv = () => {
  const result = Object.entries(process.env).reduce((acc, curr) => {
    if (curr[0].includes("RSS_")){
      const envVal = `${curr[0]}=${curr[1]}`;
      return [...acc, envVal];
    } 
    return acc;
  }, [])
  
  console.log(result.join('; '))
};

parseEnv();
