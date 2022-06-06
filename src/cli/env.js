export const parseEnv = () => {
    const rss = Object.keys(process.env).filter(el => el.slice(0, 4).includes('RSS_'))
    rss.forEach(el => console.log(el + '=' + process.env[el]))
};

parseEnv()