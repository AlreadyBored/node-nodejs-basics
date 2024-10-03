const parseEnv = () => {

  const envVariables = process.env;
  const regExp = /^RSS_/;
  let result = '';

  for (let variable in envVariables) {
    if (regExp.test(variable)) {
      result += `${variable}=${envVariables[variable]}; `;
    }
  }

  console.log(result.slice(0, -2));

};

parseEnv();