const parseArgs = () => {
    const name = process.argv[2];
    const value = process.argv[3];

    console.log(name + ' is ' + value);
};

parseArgs();