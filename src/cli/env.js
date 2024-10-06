const parseEnv = () => {
    for (const key in process.env) {
        if( /RSS_[a-z|=]+/g.test(key) ) {
            console.log(`${key}=${process.env[key]}`  )
        }
    }
};

parseEnv();