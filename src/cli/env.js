export const parseEnv = () => {
    let reg = /RSS_/;
    for(let key in process.env) {
        if(key.match(reg))
        console.log(key); 
    }
};

parseEnv();
