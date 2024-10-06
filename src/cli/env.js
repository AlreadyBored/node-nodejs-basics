const prefix = 'RSS_';

const parseEnv = () => {
   const argumentsWithPrefix =Object.entries(process.env).reduce((acc, [key, value]) =>
   key.startsWith(prefix) ? [...acc, `${key}=${value}`] : acc, []);

   const argsToConsole = argumentsWithPrefix.join('; ');
   console.log(argsToConsole);
   
};

parseEnv();