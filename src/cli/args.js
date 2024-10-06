const parseArgs = () => {
    const args = process.argv.slice(2);

    const arrTransformArgs = args.reduce((acc, val, index, array) => {
        if (val.startsWith("--")) {
            const field = val.slice(2)
            const value = array[index + 1];
            const resultStr = `${field} is ${value}`
            acc.push(resultStr);
        }
        return acc
    }, [])

    console.log(arrTransformArgs.join(", "));
};

parseArgs();