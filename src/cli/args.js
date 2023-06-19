const parseArgs = () => {
    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i += 2) {
        const prop = args[i].replace(/--/g, '')
        console.log(`${prop} is ${args[i + 1]}`)
    }
};

parseArgs();