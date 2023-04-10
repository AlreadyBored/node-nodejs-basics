const parseArgs = () => {
    const prefex = "--"
    const args = process.argv.reduce((prev, cur, curI, arr) => {
        if (cur.startsWith(prefex)) {
            const format = `${cur.replace(prefex, "")} is ${arr[curI + 1]}`
            return [...prev, format];
        }
        return prev
    }, [])

    const strArg = args.join('');

    console.log(strArg);
};

parseArgs();