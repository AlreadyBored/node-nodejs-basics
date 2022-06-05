export const parseEnv = () => {
  let output = '';
  const keysWithPrefix = Object.keys(process.env).filter((variable) =>
    variable.includes('RSS_'),
  );
  for (let index = 0; index < keysWithPrefix.length; index++) {
    const key = keysWithPrefix[index];
    const value = process.env[key];
    output += `${key}=${value}; `;
  }
  console.log(output);
};

parseEnv();
