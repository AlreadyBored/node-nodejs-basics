const PREFIX = 'RSS_';

export const parseEnv = () => {
    Object.entries(process.env).map(item => {
        let [key, value] = item;
        if(key.startsWith(PREFIX)) console.log(value);
    });
};

parseEnv();