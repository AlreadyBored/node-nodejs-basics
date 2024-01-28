const parseEnv = () => {
    // Write your code here 
    let result = [];
    for (const key in process.env) {
        if (key.includes('RSS_')) {
            result.push(`${key} = ${process.env[key]}`);
        }
    }
    console.log(result.join("; "))
};

parseEnv();