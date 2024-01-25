/**
 *  implement function that parses environment variables with prefix 
 * RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
 */
import process from 'process';
const parseEnv = () => {
    // Write your code here 
    const envs = process.env;
    for (let env in envs) {
        if( env.startsWith('RSS_')){
            console.log(`${env}=${envs[env]}`);
        }
    }

};

parseEnv();