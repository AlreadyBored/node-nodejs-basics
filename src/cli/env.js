import process from "process";

const parseEnv = () => {
    let env = process.env;

    for(let key in env){
        let prefix = key.slice(0, 4);
        if(prefix === "RSS_") console.log(`${key}=${env[key]};`)
    }
};

parseEnv();