const parseEnv = () => {
    let rssProps = [];

    for (let prop in process.env) {
        if (prop.startsWith('RSS_')) {
            rssProps.push(`${prop}=${process.env[prop]}`);
        }
    }

    console.log(rssProps.join('; '));
};

parseEnv();