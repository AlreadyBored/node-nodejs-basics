const parseArgs = () => {
    const argv = process.argv;

    const array = [];
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--')) {
            array.push(
                `${argv[i].slice(2)} is ${ argv[i+1]}`
            );
        }
    }

    console.log(array.join(', '))
};

parseArgs();