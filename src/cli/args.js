const parseArgs = () => {
    const argv = process.argv.slice(2)

    const cliArguments = argv.reduce(
        (acc, val, index, arr) => {
            if (val.startsWith('--')) {
                acc.push(`${val.slice(2)} is ${arr[index + 1]}`)
            }

            return acc
        }, [])

    console.log(cliArguments.join(', '))
};

parseArgs();