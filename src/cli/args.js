const parseArgs = () => {
    const output = []
    const args  = process.argv.slice(2)
    args.forEach((e, i) => {
        if (e.slice(0, 2) === '--') {
            output.push(`${e.slice(2, e.length)} is ${args[i + 1]}`)
        }
    })
    console.log(output.join(', '))
}

parseArgs();