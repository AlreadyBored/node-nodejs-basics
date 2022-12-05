const parseEnv = () => {
    // Write your code here 
    const arrayOfEntries = Object.entries(process.env);
    const result = arrayOfEntries.reduce((acc, cur) => {
        if (cur[0].indexOf('RSS_') === 0) {
            return `${acc} ${cur[0]}=${cur[1]};`;
        }
        return acc
    }, '')
    console.log(result.slice(1, -1))
};

parseEnv();