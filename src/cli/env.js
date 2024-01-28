import process from 'node:process';

const parseEnv = () => {
    const argsDetails = process.env;
    let arrWithoutSemicolon = [];
    Object.entries(argsDetails).forEach(
        (arg, index) => {
            if (arg[0].startsWith('RSS_')) {
               arrWithoutSemicolon.push([arg[0] + "=" + arg[1]]);
            }
        }
    )
    console.log(arrWithoutSemicolon.join('; '))
};

parseEnv();

/*
* implement function that parses environment variables with
* prefix RSS_ and prints them to the console in the format
* RSS_name1=value1; RSS_name2=value2
*
* */
