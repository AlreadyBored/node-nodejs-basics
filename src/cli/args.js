const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((item, index) => {
        if (item.includes('--') && args[index + 1])
            console.log(`${item.slice(2)} is ${args[index + 1]}`);
    })
};

parseArgs();