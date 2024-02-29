const prefix = 'RSS_'

const parseEnv = () => {
    const parsedEnv = Object.entries(process.env).map(item =>
        `${prefix}${item[0]}=${item[1]}`).join('; ')

    console.log(parsedEnv)
};

parseEnv();