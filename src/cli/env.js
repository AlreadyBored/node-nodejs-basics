const parseEnv = () => {
    try {
        const rssEnvVars = Object.entries(process.env).reduce((acc, item) => (
            item[0].includes('RSS')
            ?  [...acc, `${item[0]}=${item[1]}`]
            : acc
        ), []);

        console.log(rssEnvVars.join('; '));
    } catch (error) {
        console.error(error);
    }
};

parseEnv();