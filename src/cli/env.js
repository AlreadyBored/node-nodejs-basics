const parseEnv = () => {
    let arrRss = []

    for (const [key, value] of Object.entries(process.env)) {
        if (key.match(/RSS_\S*/ig)){
            arrRss.push(`${key}=${value}`);
        }
    }

    console.log(arrRss.join ('; '));
};

parseEnv();