import process from 'node:process';

const parseArgs = () => {
    const exsistArgs = process.argv.slice(2);
    const output = [];

    if(exsistArgs.length % 2 !== 0) {
       exsistArgs.push(undefined);
    }

    for (let i = 0; i < exsistArgs.length; i += 2){
       output.push(`${exsistArgs[i].replace('--', '')} is ${exsistArgs[i+1]}`)
    }

    console.log(output.join(', '))
};

parseArgs();