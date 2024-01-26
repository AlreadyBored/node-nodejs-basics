const prefix = 'RSS_';

const parseEnv = () => {
    const envValues = process.env;

    const print = Object.keys(envValues).reduce((result, key) => {
        if (key.startsWith(prefix)) {
            result += `${result.length !== 0 ? '; ' : '' }${key}=${envValues[key]}`;
        }

        return result;
    }, '');

    console.log(print);
};

parseEnv();
