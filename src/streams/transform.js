const transform = async () => {
    try {
        process.stdin.setEncoding('utf-8');
        process.stdin.on("data", (input) => {
            const reversedInput = input.trim().split('').reverse().join('');
            process.stdout.write(`${reversedInput}\n`);
        })
    } catch (error) {
        throw error;
    }
};

await transform();