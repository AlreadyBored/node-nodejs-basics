const parseEnv = () => {
    let rssVars = [];
    for (let [k, v] of Object.entries(process.env)) {
        if (k.startsWith("RSS_")) {
            rssVars.push(`${k}=${v}`);
        }
    }
    console.log(rssVars.join("; "));
};

parseEnv();
