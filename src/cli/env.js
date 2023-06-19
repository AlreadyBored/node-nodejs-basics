

const parseEnv = () => {
    const envVars = process.env;
    //process.env.RSS_12 = 12;
    //process.env.RSS_ff = 'fff';
    const rss = [];
    for(let key in envVars){
        if(key.startsWith('RSS_')){
            rss.push(`${key}=${envVars[key]}`)
        }
    }
    const result = rss.join('; ');
    console.log(result);
    };

parseEnv();

