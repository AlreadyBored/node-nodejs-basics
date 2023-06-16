/*
implement function that parses environment variables with prefix RSS_ 
and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/

const parseEnv = () => {
    const PREFIX = "RSS_"
    const res = [];
    for (const v in process.env) {
        if (v.startsWith(PREFIX)) {
            res.push(`${v}=${process.env[v]}`);
        };
    }
    console.log(res.join("; "));
};

parseEnv();