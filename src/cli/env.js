const parseEnv = () => {

    // function that check RSS_ prefix
    const checkRss = (arg) => {
        const rss = arg.substr(0, 4);
        if(rss === 'RSS_') return true;
        else false;
    }

    const result = [];
    for(var arg in process.env) {
        if(checkRss(arg)) {
            result.push(`${arg}=${process.env[arg]}; `);
        }
    }
    console.log(result.join(''));
};

parseEnv();