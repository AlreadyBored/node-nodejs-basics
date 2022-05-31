export const parseEnv = () => {
    let answer = [];
           
    for (let env in process.env){
        if (env.match(/RSS_\w*/)) answer.push(`${env}=${process.env[env]}`);
    }
    console.log(answer.join('; '));
};

parseEnv();