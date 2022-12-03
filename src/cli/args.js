const parseArgs = () => {
    const argv = process.argv
    argv.forEach((val, index) => {
        if (val === 'value') {
            console.log('propName is', `${val}`)
        }else if (val === 'value2') {
            console.log('prop2Name is', `${val}`)
        }
    });
};

parseArgs();