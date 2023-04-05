const parseEnv=() => {

    for(let [key, val] of Object.entries(process.env)) {
        if(key.includes('RSS')) {
            console.log(`${key}=${val}`)
        }
    }
};

parseEnv();