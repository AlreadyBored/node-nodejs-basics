const parseArgs = () => {
    const args = process.argv;
    const chunk = 2;
    let output = '';

    for (let i = 2; i < args.length; i+=chunk) {
        let valueIndex = i + 1;

        if (valueIndex > args.length) {
            break;
        }

        output = output.concat(args[i].replace(/^--/, '') + ' is '+args[valueIndex], ', ')
    }

    console.log(output);
};

parseArgs();