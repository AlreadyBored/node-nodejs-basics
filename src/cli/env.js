const parseEnv = () => {
    const processObj = process.env;
    const result = [];
    for (let i in processObj){
        if (i.includes('RSS_')){
            result.push(`${i}=${processObj[i]}`)

        }
    }
    console.log(result.join('; '))
};

parseEnv();