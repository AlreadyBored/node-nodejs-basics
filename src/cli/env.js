const parseEnv = () => {
    // Write your code here 
    const prefix = 'RSS_'
    const filteredFormatted = Object.entries(process.env).filter(v => v[0].startsWith(prefix)).map(v => `${v[0]}=${v[1]}`).join("; ");
    console.log((filteredFormatted))
};

parseEnv();