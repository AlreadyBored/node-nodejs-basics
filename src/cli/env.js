const parseEnv = () => {
  const entries = Object.entries(process.env).filter(([param]) => param.startsWith('RSS_')); 
  const result = entries.reduce((acc, [name, value]) => {
    const result = `${acc ? '; ' : ''}${name}=${value}`  
    return acc + result; 
  }, '')
  console.log(result);
};

parseEnv();