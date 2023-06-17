const parseEnv = () => {
    const prefix = 'RSS_';
    const envVariables = Object.entries(process.env);
    
    envVariables.forEach(([key, value]) => {
      if (key.startsWith(prefix)) {
        const parsedKey = key.slice(prefix.length);
        console.log(`RSS_${parsedKey}=${value}`);
      }
    });
  };

parseEnv();