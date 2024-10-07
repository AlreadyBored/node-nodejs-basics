const parseEnv = () => {
    const envs = process.env;

    const RSS_envs = Object.keys(envs)
        .filter( env => env.startsWith("RSS"))
        .map( k => ({ name: k, value: envs[k]})); 

    RSS_envs.forEach( v => console.log(`${v.name}=${v.value}`));
};

parseEnv();