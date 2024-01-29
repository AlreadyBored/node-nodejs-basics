
const PREFIX = '--'
const SEPARATOR = ', '

const getPrefixArgs = () => {
    const result = {}

    process.argv.forEach(arg => {
        if (arg.startsWith(PREFIX)) {
            result[arg.slice(2)] = process.argv[i + 1]
            i++
        }
    })

    return result
}

const parseArgs = () => {
    const args = getPrefixArgs()

    console.log(Object.keys(args).map(key => `${key} is ${args[key]}`).join(SEPARATOR))
};

parseArgs();