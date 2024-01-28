// env.js - implement function that parses environment variables with 
// prefix RSS_ and prints them to the console in the format RSS_name1=value1; 
// RSS_name2=value2
import {env} from 'node:process'



// args.js - implement function that parses command line arguments 
// (given in format --propName value --prop2Name value2, 
// you don't need to validate it) and prints them to the console in the 
// format propName is value, prop2Name is value2


const parseEnv = () => {
    // console.log(`RSS_${env}`)
    // console.log(Object.keys(env).map(item => `RSS_${item}`))
    const formattedEnvs = Object.entries(env)
                            .filter(entry => entry[0].includes('RSS'))
                            .map(item => `${item[0]}=${item[1]}`)
                            .join(';')
    console.log(formattedEnvs)
    // Write your code here 
};

parseEnv();