export const parseEnv = () => {
    const prefix = 'RSS_';
    const keysObject = Object.keys(process.env);
        const containPrefix = keysObject.map((el) => {
            return el.startsWith(prefix)
        });
       const indexRSS_name1 = keysObject.indexOf('RSS_name1');
       const indexRSS_name2 = keysObject.indexOf('RSS_name2');

         if(containPrefix.includes(true)) {
            console.log( `${keysObject[indexRSS_name1]}=${process.env.RSS_name1}; ${keysObject[indexRSS_name2]}=${process.env.RSS_name2}`)
            } else {
                throw "Error"
            }
     
};

parseEnv()

// RSS_name1=value1 RSS_name2=value2 node env.js - for checking 
