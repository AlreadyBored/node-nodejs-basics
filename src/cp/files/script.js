const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    console.log(chunkStringified)
    if (chunkStringified.includes('CLOSE')) {
        console.log('EXIT')
        process.exit(0);
    }
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);
