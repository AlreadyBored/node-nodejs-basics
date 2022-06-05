export const parseEnv = () => {
    // Write your code here 
    const data = process.env;
    for (let name in data) {
        if (name.startsWith('RSS_'))
            console.log(name + '=' + data[name])
    }
};

