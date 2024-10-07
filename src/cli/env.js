const parseEnv = () => {

    Object.entries(process.env).map(([key, value]) => {
        if (key.includes('RSS_')) {
            console.log(key, '=', value);
        }

    });


}

parseEnv();