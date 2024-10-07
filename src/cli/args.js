const parseArgs = () => {
    let currentIndex;
    const args = process.argv.filter((arg, index) => {
        if (arg.startsWith('--')) {
            currentIndex = index;
            return true;
        }
        return index === currentIndex + 1;
    })
    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', '');
        const value = args[i + 1];
        console.log(`${propName} is ${value}`);
    }
};

parseArgs();
