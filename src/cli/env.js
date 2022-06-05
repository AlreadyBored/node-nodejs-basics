export const parseEnv = () => {
    const result = []
    Object.keys(process.env).forEach(key => {
       if(key.indexOf('RSS_')!==(-1)){
        result.push(`${key} = ${process.env[key]}`);
       }
    });
    console.log(result.join(', '));
};