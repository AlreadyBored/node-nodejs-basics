console.log(process.env);

const parseEnv = () => {
  const args = process.env;
  const keys = Object.entries(args).filter(([argKey]) =>
    argKey.startsWith('RSS_')
  );

  const result = keys.reduce((acc, [key, value]) => {
    acc += `${key}=${value}; `;
    return acc;
  }, '');

  console.log(result);
};

parseEnv();
