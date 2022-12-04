const parseEnv = () => {
    
    let envVariables;
    
    const processVariables = process.env;
    for (const [key, value] of Object.entries(processVariables)) {
        if (!envVariables) {
            envVariables = `RSS_${key}=${value}`
        }
        envVariables = `${envVariables}; RSS_${key}=${value}`;
      }
      console.log(envVariables);
};  

parseEnv();