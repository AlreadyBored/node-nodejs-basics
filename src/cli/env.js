const parseEnv = () => {
    const pefixVar = new RegExp('^RSS_.+')
    let strMatch = '';
    for (const [key,value] of Object.entries(process.env)) {
        if(key.match(pefixVar)) strMatch += `${key}=${value}; `  
    }
    console.log(strMatch.substring(0,strMatch.length - 2))
};

parseEnv();