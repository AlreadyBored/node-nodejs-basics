export const parseEnv = () => {
    const prefix = 'RSS_';
    const arrRSS = [];

    for (const [key, value] of Object.entries(process.env)) {

        if (key.startsWith(prefix)) {
            const name = key.substring(prefix.length);
            arrRSS.push(`RSS_${name}=${value}`);
        }
    }

    console.log(arrRSS.join("; "));
};

parseEnv();