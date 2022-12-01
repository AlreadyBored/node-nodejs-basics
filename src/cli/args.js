const parseArgs = () => {
    const inputArgs = process.argv.slice(2)
    const output = inputArgs.reduce((acc, value, i, arr) => {
        const argVal = arr[i + 1]
        if (value.startsWith('--')) {
            const argument = value.slice(2)
            acc.push(`${argument} is ${argVal}`)
        }
        return acc
    }, [])
    console.log(output.join())
};

parseArgs();