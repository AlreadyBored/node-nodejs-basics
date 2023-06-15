const prefix = 'RSS_';

const parseEnv = () => {
    const envs = process.env;

    const result = Object.keys(process.env)
        .filter(el => el.startsWith(prefix))
        .map(el => `${el}=${envs[el]}`)
        .join('; ');

    console.log(result);
}

parseEnv();