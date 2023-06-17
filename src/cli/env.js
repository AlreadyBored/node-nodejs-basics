const parseEnv = () => {
    // Write your code here 
    try {
        for (const envVar in process.env) {
            if (envVar.substring(0,4) == 'RSS_') {
                console.log(`${envVar} is ${process.env[envVar]}`);
            }
        } 
    } catch (error) {
        console.log(error.message); 
    }
};

parseEnv();