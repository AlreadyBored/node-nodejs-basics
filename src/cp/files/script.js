const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);
console.log('Enter data');
const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(
        `(Child) Received from master process: ${chunk.toString()}`
    );
    return process.send(
        `(Child) Received from master process: ${chunk.toString()}`
    );
};

process.stdin.on('data', echoInput);