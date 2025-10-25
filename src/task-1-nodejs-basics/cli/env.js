const parseEnv = () => {
  let result = '';
  Object.keys(process.env).forEach(varName => {
    if (varName.startsWith('RSS_')) {
      if (result !== '') result += '; ';
      result += `${varName}=${process.env[varName]}`;
    }
  });
  console.log(result);
};

parseEnv();
