// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
const parseEnv = () => {
    let envOutput = [];
    for (const envVar in process.env) {
        if (envVar.startsWith('RSS_')) {
            envOutput.push(
                `${envVar}=${process.env[envVar]};`
            );
        }
    }
    envOutput.length && console.log(envOutput.join(' '));
};

parseEnv();