const parseEnv = () => {
    // Write your code here
    const prefix = "RSS_";

    // Get environment variables and filter them if they have prefix RSS_
    const envKeys = Object.keys(process.env).filter(key => key.startsWith(prefix))

    // Print out variables that have prefix RSS_
    envKeys.forEach((key) => {
        console.log(`${key}=${process.env[key]}`)
    })

};

parseEnv();