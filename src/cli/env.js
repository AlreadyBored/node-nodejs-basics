// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
const parseEnv = () => {
    let envOutput = [];
    for (const envName in process.env) {
        if (envName.startsWith('RSS_')) {
            envOutput.push(
                `${envName}=${process.env[envName]}`
            );
        }
    }
    envOutput.length 
        ? console.log(envOutput.join('; '))
        : console.log('There are no env variables with "RSS_" prefix');
};

parseEnv();