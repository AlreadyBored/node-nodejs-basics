const parseEnv = () => {
    // Write your code here
    // env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console
    // in the format RSS_name1=value1; RSS_name2=value2

    const res = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ')
    console.log(res);
    // const variables = process.argv.slice(2)
    // const result = variables.filter(name => name.startsWith('RSS_')).join('; ')
    // console.log(result)
};

parseEnv();