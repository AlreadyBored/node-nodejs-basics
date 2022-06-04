export const parseArgs = () => {
    const args = process.argv.slice(2)
    const result = args.reduce((res, arg, index) => {
        if(arg.includes('--')) {
            const newArg = arg.replace('--', '')
            res.push(`${newArg} is ${args[index + 1]}`)
        }

        return res
    }, [])

    console.log(result.join(', '))
};

parseArgs()