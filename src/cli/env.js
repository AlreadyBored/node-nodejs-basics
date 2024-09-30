const parseEnv = () => {
    for(const key in process.env) {
        console.log('RSS_' + key + '=' + process.env[key]);
    }
};

parseEnv();
