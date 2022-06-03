process.env.RSS_School='Uzbekistan';

export const parseEnv = () => {
    const list  = Object.keys(process.env);
    const result = list.map( variable => {
        if(variable.includes('RSS_')){
            return {[variable]: process.env[variable]};
        }
    }).filter(item=> item!=null);
    result.forEach( item => console.log(`${Object.keys(item)[0]}=${Object.values(item)[0]};`))

};

parseEnv()