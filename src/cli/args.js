const parseArgs = () => {

    process.argv.forEach((val, idx, arr) => {
        if (val.includes('--')) {
            console.log(val.substring(2), 'is', arr[idx + 1]);
        }

    });

};

parseArgs();