export const parseArgs = () => {
    const args = process.argv.slice(2);

    args.forEach((key, index) => {
        if (key.includes('--')) {
            console.log(`${key.slice(2)} is ${args[index + 1]}`)
        }
    });
};

parseArgs();
