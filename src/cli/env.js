//env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
export const parseEnv = () => {

    let result ="";
    for (const key in process.env) {
        if(key.startsWith("RSS_")){
           const value = process.env[`${key}`];
           result += `${key}=${value};`;
        }
    }
    console.log(result);
};

parseEnv();