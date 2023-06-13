const parseArgs = () => {
    const cleanProcessArgv = process.argv.slice(2);

    const finalArgvArray = cleanProcessArgv.reduce((acc, el, index, arr) => {
        if (el.startsWith('--') && arr[index + 1]) {
            const cleanEl = el.slice(2);
            const argvArrayTransformed = `${cleanEl} is ${arr[index + 1]}`;
            acc.push(argvArrayTransformed);
        }

        return acc;
    }, [])

    console.log(finalArgvArray.join(', '));
};

parseArgs();