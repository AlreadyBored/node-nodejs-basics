export const parseArgs = () => {
    const myArgs = process.argv.slice(2);
    const result = [];
    for (let i = 0; i < myArgs.length; i++) {
        if(myArgs[i].slice(0,2) === '--') {
            result.push(`${myArgs[i].slice(2)} is ${myArgs[i+1]}`)
        }
    }

    console.log(result.join(', '))
};

// parseArgs()