export const parseEnv = () => {
    const rssVar = Object.entries(process.env).reduce((acc,[key,value])=>{
        if(key.startsWith('RSS_')) acc.push(`${key}=${value}`);
        return acc;
    },[]);
    console.log(rssVar.join('; '));
};
parseEnv();