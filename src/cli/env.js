const parseEnv = () => {
    const prefix = 'RSS_';
    const envVars = Object.keys(process.env)
      .filter(key => key.startsWith(prefix))
      .map(key => `${key.slice(prefix.length)}=${process.env[key]}`);
  
    console.log(envVars.join('; '));
  };
  
  parseEnv();
  