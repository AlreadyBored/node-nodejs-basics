/*
implement function that parses environment variables with prefix RSS_ 
and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

TEST:
1) cd src/cli
2) RSS_EEE=33 dddd=33333 RSS_RRRR=2324 node env.js
Output: RSS_EEE=33; RSS_RRRR=2324
*/
const parseEnv = () => {
    const res = [];
    for (const v in process.env) {
        if (v.startsWith("RSS_")) {
            res.push(`${v}=${process.env[v]}`);
        };
    }
    console.log(res.join("; "));
};

parseEnv();