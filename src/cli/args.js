const parseArgs = () => {
    const args = process.argv.slice(2);
    let output = '';

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.startsWith('--')) {
            const propName = arg.substring(2);
            let value = 'undefined';

            if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
                value = args[++i];
            }

            output += `${propName} is ${value}, `;
        }
    }
    console.log(output.slice(0, -2));
};

parseArgs();