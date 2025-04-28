const parseEnv = () => {
   // console.log(process.env);

    try {
      const RSSVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
  
      console.log(RSSVariables);
    } catch (err) {
      throw new Error('Failed to parse rss_variables');
    }
  };
  
  parseEnv();
