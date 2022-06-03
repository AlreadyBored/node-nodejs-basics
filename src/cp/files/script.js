const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) {
        process.stdout.write('Bay!\n')
        process.exit(0)
    }
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

// process.stdin.on('data', data => echoInput(data));

process.stdin.on('data', function(data) {
    echoInput(data)
});