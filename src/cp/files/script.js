const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) { process.exit(0); }
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`);
    process.send('test message from child process');

};

process.on('SIGINT', () => {
    console.log('Child process exit with code 0');

    process.exit(0);
});

process.stdin.on('data', echoInput);

