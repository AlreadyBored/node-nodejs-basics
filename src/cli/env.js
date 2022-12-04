import {env} from 'node:process'
const parseEnv = () => {
    let statements = []
    for (let key in env) {
        if (key.startsWith('RSS_')) {
            let statement = `${key}=${env[key]}`;
            statements.push(statement)
        }
    }
    let str = statements.join('; ');
    console.log(str)

};

parseEnv();