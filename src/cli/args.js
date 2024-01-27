const parseArgs = () => {
    for (let i = 2; i < process.argv.length; i++){
        if (i % 2 === 0) {
            console.log(`${process.argv[i].replace('--', '')} is ${process.argv[i+1]}`);
        }
    }
};

parseArgs();