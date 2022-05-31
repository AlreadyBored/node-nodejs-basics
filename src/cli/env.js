export const parseEnv = () => {
    let answer = [];
    /*console.log(process.env
        .filter(env => env.match(/RSS_\w/))
        //.map(value => value = `${value.slice(2)} is ${process.argv[process.argv.indexOf(value) + 1]}`)
       /* .join(', '));*/
       
    for (let env in process.env){
        if (env.match(/RSS_\w*/)) answer.push(`${env}=${process.env[env]}`);
    }
    console.log(answer.join('; '));
};

parseEnv();