export const parseEnv = () => {

    // Some test data here
    process.env.RSS_name1 ='value1'
    process.env.RSS_name2 ='value2'
    process.env.RSS_name3 ='value3'
    // ...
    
    const env = process.env

    for (let key in env) {
        if (key.slice(0,4)=='RSS_'){
            console.log(env[key])
        }
    }
};

parseEnv()

