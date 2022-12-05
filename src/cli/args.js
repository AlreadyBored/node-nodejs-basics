const parseArgs = () => {
    const argv = process.argv
    let result = '';
    for (let i=0, max=argv.length; i<max; i++) {
        if (argv[i].startsWith('--')) {
            result += `${argv[i].substr(2)} ${argv[i+1]},`
        }
    }
    console.log(result.substring(0, result.length - 1));
};

parseArgs();
