const parseEnv = () => {
    // Write your code here 
    // console.log(process.env);

    for(const key in process.env) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${process.env[key]};`);
        }
    }
};

parseEnv();