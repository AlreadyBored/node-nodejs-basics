const parseEnv = () => {
    // Write your code here 
    const parsed = Object.entries(process.env).filter(item =>  item[0].startsWith('RSS_'))
    const mapped = parsed.map(value => `${value[0]}=${value[1]}`).reverse().join('; ')
    console.log(mapped)
};

parseEnv();