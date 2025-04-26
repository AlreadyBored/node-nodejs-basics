// env.js - implement function that parses environment variables
// with prefix RSS_ and prints them to the console in the format
// RSS_name1=value1; RSS_name2=value2

const parseEnv = () => {
    // Write your code here
    // console.log(process.env);

    for (let variable in process.env) {
        if (variable.startsWith('RSS_')) {
            console.log(`${variable}=${process.env[variable]}`);
        }
    }
};

parseEnv();
