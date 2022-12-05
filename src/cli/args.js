const parseArgs = () => {
    let cliArgs = process.argv.slice(2)
    let result  = []

    cliArgs.forEach((arg, i, arr) => {
        let nextVal = arr[i + 1]
        if (nextVal) {
            if (arr[i].startsWith('--')) {
                result.push(`${arr[i].slice(2)} is ${nextVal}`)
            }
        }
    })
    console.log(result.join(', '))
};

parseArgs();