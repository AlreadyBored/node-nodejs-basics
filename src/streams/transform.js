const transform = async () => {
    // handle chunks from stdin and write them to stdout
    process.stdin.on('data', (chunk) =>
        process.stdout.write(`received chunk: ${chunk}`)
    );
};

await transform();
