export const parseEnv = () => {
  const envVars = process.env;

  let result = '';

  for (const key in envVars) {
    if (key.split('_')[0] === 'RSS') {
      result += `${key}=${envVars[key]}; `;
    }
  }

  console.log(result);
};

parseEnv();
