export const parseEnv = () => {
    let str = ''
    for(let key in process.env) {
        if(key.includes('RSS_')) {
            str += `${key}=${process.env[key]}; `
        }
    }
    const newStr = str.trim().slice(0, -1)
    console.log(newStr)
};

parseEnv()