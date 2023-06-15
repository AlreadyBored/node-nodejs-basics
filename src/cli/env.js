import process from 'node:process';

const parseEnv = () => {
    const args = process.env
    let variablesArr = []
    Object.entries(args).map(([ key, value] ) => {
        if (key.startsWith('RSS_')){
            variablesArr.push(`${key} = ${value}`)
        }
    })
    console.log(variablesArr.join('; '))
};

parseEnv();
