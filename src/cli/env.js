const parseEnv = () => {
    // Write your code here

    Object.keys(process.env).map((str) => {
        if (str.slice(0, 4).includes('RSS_')) {
            console.log(str)
        }
    })
};

parseEnv();
