const parseEnv = () => {
    const prefix = 'RSS_';
    const envArr = Object.entries(process.env);
    var rssVariables = '';

    envArr.forEach(([key, value]) => {
        if(key.startsWith(prefix)){
            rssVariables = rssVariables + key + '=' + value + '; ';
        }
    });
    console.log(rssVariables);
};

parseEnv();