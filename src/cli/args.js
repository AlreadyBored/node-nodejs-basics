const parseArgs = () => {
    try {
        const args = process.argv.slice(2);
        const result = args
            .filter((_, i) => i % 2 === 0)
            .map((key, i) => `${key.slice(2)} is ${args[i * 2 + 1]}`)
            .join(', ')
        console.log(result);        
    } catch (err) {
        console.log(err);
    }
};

parseArgs();