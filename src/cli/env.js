import process from 'node:process';

const parseEnv = () => {
    const evns= process.env;
    const vaildKeys = Object.keys(evns)
    .map((key) => /^RSS_/.test(key) && `${key}=${evns[key]}`)
    .filter((item) => item)
    .join('; ');

    console.log(vaildKeys);
};

parseEnv();