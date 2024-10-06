const parseEnv = () => {
    const env = process.env;
    const rssEnv = {};

    for (let key in env) {
        if (key.startsWith('RSS_')) {
            rssEnv[key] = env[key];
        }
    }

    let rssEnvString = '';
    for (let key in rssEnv) {
        rssEnvString += `${key}=${rssEnv[key]}; `;
    }

    console.log("Output:",rssEnvString);

};

parseEnv();