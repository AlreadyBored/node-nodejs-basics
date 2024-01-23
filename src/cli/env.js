import process from "process";

const parseEnv = () => {
    let result  = "";
    let obj = process.env;
    for (let key in obj) {
        if(key.startsWith("RSS_")){
            result += `${key}=${obj[key]}; `
        }
    }
    console.log(result.slice(0, -2))
}
parseEnv();