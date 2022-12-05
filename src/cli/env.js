export const parseEnv = () => {
    const env = Object.keys(process.env);
    const array = [];
    env.forEach((en) => {
        if (en.substring(0, 4) === 'RSS_') {
            let item = en + '=' + env[en];
            array.push(item.trim());
        }
    });
    console.log(array.join(';'));
};
parseEnv();