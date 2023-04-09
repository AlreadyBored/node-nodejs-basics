const parseEnv=() => {

    for(let [key, val] of Object.entries(process.env)) {
        if(key.includes('RSS_')) {
            console.log(`${key}=${val}`)
        }
    }
};

parseEnv();