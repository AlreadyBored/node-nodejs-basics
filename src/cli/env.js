export const parseEnv = () => {
    // Write your code here 
    const result =[]
    console.log(process.env);
    for (const key in process.env) {
        if(key.includes("RSS_")){
            result.push(`${key}=${process.env[key]}`)
        }
    }

    console.log(result.join('; '));

};
parseEnv()