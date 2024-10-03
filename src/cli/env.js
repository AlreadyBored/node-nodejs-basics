
// implement function that parses environment variables with prefix 
// RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
import { env } from 'process'

const parseEnv = () => {
    const keysEnv = Object.entries(env)
    keysEnv.forEach((item, i) => {
        if(item[0].startsWith('RSS_')) {
            console.log(`${item[0]}${i}=${item[1]}; `)
        }
    })
};

parseEnv();