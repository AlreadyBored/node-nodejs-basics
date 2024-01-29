
const parseEnv = () => {
    const allowedEnvVars = Object.keys(process.env).filter(envVar.startsWith("RSS_"));
  
    console.log(allowedEnvVars.map(envVar =>`${envVar}=${process.env[envVar]}`).join("; "));
};

parseEnv();