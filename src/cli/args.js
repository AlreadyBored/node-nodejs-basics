const parseArgs = () => {
    const logArgs = process.argv.slice(2)

    const arr = []
    for (let i = 0; i <= logArgs.length; i += 2) {
        const isTrueName = /^--/.test(logArgs[ i ])

        if (isTrueName) {
            const str = logArgs[ i ].replace('--', '') + ' is ' + logArgs[ i + 1 ];
            arr.push(str)
        }
    }

    console.log(arr.join(', '));
};

parseArgs();