import { env } from 'node:process';

const parseEnv = () => {

    const resultArr = Object.entries(env).reduce((acc, [key, value] ) => {
        if (/^RSS_.+/.test(key)) {
            acc = [...acc, `${key}=${value}`];
        }

        return acc;
    }, []);
    const resultString = resultArr.join('; ');
    console.log(resultString);
};

parseEnv();

