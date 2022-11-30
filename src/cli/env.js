process.env.RSS_1 = '1';
process.env.RSS_2 = '2';
process.env.RSS_3 = '3';
process.env.RSS_3100 = '3';
process.env.RSS_10 = '3';

const parseEnv = () => {
    console.log(Object.entries(process.env).map(([key, value]) => {
        if (key.slice(0, 3) === 'RSS') {
            return `${key} = ${value}`
        }
    }).filter((el) => el !== undefined))
};

parseEnv();