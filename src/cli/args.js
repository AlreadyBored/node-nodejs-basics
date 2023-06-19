const parseArgs = () => {
    const args = []

    for (let i = 0; i < process.argv.length; i++) {
        const value = process.argv[i]
        if (value.startsWith('--')) {
            args.push(`${value.substring(2)} is ${process.argv[i + 1]}`)
            i = i + 1
        }
    }

    args.join(', ')

    console.log(args.join(', '))
};

parseArgs();