const parseArgs = () => {
    const args = process.argv.slice(2);
    const list = [];
    const keyPrefix = '--';

    args.forEach((key, index) => {
        if (key.includes(keyPrefix)) {
            list.push(key + ' is ' + args[index + 1])
        }
    });

    console.log(list.join(', '));
};

parseArgs();