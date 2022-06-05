export const parseArgs = () => {
    const { argv } = process

    const accumulator = []
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--')) {
            accumulator.push(`${argv[i]} is ${argv[++i]}`)
        }
    }
    console.log(accumulator.join(', '))
}

parseArgs()
