const transform = async () => {
    try {
        // Handle chunks from console and write them to console
        process.stdin.on('data', (chunk) =>
            process.stdout.write(`received chunk: ${chunk}`)
        );
    } catch (err) {
        throw err;
    }
};

await transform();
