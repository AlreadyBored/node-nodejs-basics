const parseArgs = () => {
    const propNamePrefix = '--'
    const args = process.argv.reduce((acc, arg, index) => {
        const nextElement = process.argv.length !== index+1 ? process.argv[index+1] : null;

        if(arg.startsWith(propNamePrefix) && nextElement && !nextElement.startsWith(propNamePrefix)){
            acc.push(`${arg} is ${nextElement}`)
        }
        return acc;
    }, []).join(', ');

    console.log(args);

};

parseArgs();
